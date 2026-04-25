# Asm.Umbraco library extraction — design

Date: 2026-04-23

## Summary

Extract reusable code from `AndrewMcLachlan.com` (AmCom) into new NuGet
packages under the `Asm` library solution so other Umbraco sites and ASP.NET
apps can consume it.

Two new Umbraco-specific packages are created. Two existing generic
middleware components and a reporting endpoint are moved into the existing
`Asm.AspNetCore` package.

## Scope

Extracted to `Asm.Umbraco`:
- `FixedMachineInfoFactory` (Umbraco `IMachineInfoFactory` with configurable
  fallback machine name)
- `ImgSetTagHelper`
- `IPublishedContentExtensions` (`NameAsCssClass`, `ValueOr`, `ValueAnd`)

Extracted to `Asm.Umbraco.Authentication`:
- `AzureConfig`, `AzureLoginOptions`, `AzureBackOfficeAuthenticationOptions`
  and their composer/extension wiring, renamed to use the current
  "Microsoft Entra ID" branding
- A `IPackageManifestReader` that ships the back-office auth-provider
  manifest programmatically (no App_Plugins file)

Moved to `Asm.AspNetCore`:
- `SecurityHeadersMiddleware`, generalised (options for exempt paths,
  header values, server-header stripping)
- `UrlRewriteMiddleware`, renamed to `CanonicalUrlMiddleware` and
  generalised (options for exempt paths, individual rule toggles)
- `ReportingController` converted to mapped endpoints
  (`MapSecurityReporting`) with automatic `Reporting-Endpoints` /
  `Report-To` header emission from `SecurityHeadersMiddleware`

Not extracted (site-specific): `Controllers/`, `Models/`, `Views/`,
`Program.cs` composition, `umbraco/models/*.generated.cs`, `App_Plugins/`.

## Decisions and rationale

### Composer auto-discovery — explicit opt-in

Umbraco's `TypeLoader` discovers `IComposer` implementations in every
referenced assembly during `AddComposers()`. Shipping a composer in the
library would silently wire Entra ID auth in any consumer that merely
references the package (e.g. a consumer pulling it in for the tag helper).

The composer is removed. The extension method `AddEntraIdAuthentication()`
is the only entry point. AmCom's migration adds a one-liner to `Program.cs`
or a small local composer.

### Back-office login UI — `IPackageManifestReader`

The Umbraco 14+ back office is a standalone SPA. Server-side external login
registration is invisible to it; a client-side `authProvider` extension in
a `umbraco-package.json` manifest is required for the login button to
appear.

The library registers an `IPackageManifestReader` implementation that
returns the manifest programmatically. No static web assets, no
`App_Plugins/` file, no Docker/publish surprises. Registration happens
inside `AddEntraIdAuthentication()`.

### Package split — two Umbraco packages

Matches the existing library split pattern (`Asm.AspNetCore`,
`Asm.AspNetCore.Mvc`, `Asm.AspNetCore.Modules`). Consumers that only want
the tag helper / extensions don't pull in
`Microsoft.AspNetCore.Authentication.MicrosoftAccount`. Auth can evolve
independently.

- `Asm.Umbraco` — tag helper, `IPublishedContent` extensions, machine
  info factory.
- `Asm.Umbraco.Authentication` — Entra ID back-office auth.

### Configurability pattern — `Action<TOptions>` primary, `IConfigurationSection` overload

Matches the idiomatic ASP.NET Core library pattern
(`AddAuthentication().AddJwtBearer(options => { ... })`,
`AddCors(options => { ... })`). The library stays ignorant of config
section names; consumers bind as they see fit.

### Naming — `EntraId` not `AzureAD`

Microsoft renamed "Azure AD" to "Microsoft Entra ID" in July 2023, and the
`Microsoft.AspNetCore.Authentication.AzureAD.UI` package was specifically
deprecated in favour of `Microsoft.Identity.Web`. Keeping `AzureAD` in new
library type names enshrines retired branding.

Microsoft's own code convention for new identity SDKs is `MicrosoftIdentity`
rather than `Entra`, but that name implies the full `Microsoft.Identity.Web`
stack (which the AmCom code does not use — it uses the lightweight
`MicrosoftAccount` provider). `EntraId` is honest about the target
identity platform without implying a specific SDK.

### Canonical URL middleware — renamed from `UrlRewrite`

`Microsoft.AspNetCore.Rewrite` already exists with `RewriteOptions` and
`UseRewriter`. Keeping `UrlRewrite` invites confusion. "Canonical URL"
describes the actual behaviour: enforcing a canonical form (lowercase,
no trailing slash) via 301 redirects.

### Security reporting — endpoints and headers are coupled

If the reporting endpoints aren't mapped, emitting the `Reporting-Endpoints`
/ `Report-To` headers points browsers at URLs that 404. The two concerns
must travel together.

`SecurityReportingOptions` is a single source of truth registered via
`AddSecurityReporting()`. `MapSecurityReporting()` maps the endpoints using
those options. `SecurityHeadersMiddleware` auto-emits the reporting headers
when `IOptions<SecurityReportingOptions>` is registered in DI.

If a consumer doesn't call `AddSecurityReporting()`, no reporting headers
are emitted and no endpoints are mapped — clean opt-in.

### Records for property-only types

All property-only types (`FixedMachineInfoFactoryOptions`, `EntraIdOptions`,
`SecurityHeadersOptions`, `CanonicalUrlOptions`, `SecurityReportingOptions`)
are declared as `record` types, matching the `Asm` library convention.

### XML documentation on all public surface

All public types, members, and parameters have XML doc comments.
`<GenerateDocumentationFile>true</GenerateDocumentationFile>` is already
set in `src/Directory.Build.props`.

### Tests — out of scope for this round

The extracted code has side-effect-heavy boundaries (Umbraco IoC,
ImageSharp file I/O, HTTP pipeline) that don't unit-test cleanly in
isolation. Flagged as follow-up.

### Spec location

Kept in the AmCom repo (`docs/superpowers/specs/`) even though most new
code lives in the `Asm` library repo, because the work was initiated from
AmCom. The AmCom migration is the consumer-visible outcome; the library
additions serve it.

## Package layout

### `Asm.Umbraco`

```
src/Asm.Umbraco/
  Asm.Umbraco.csproj
  TagHelpers/
    ImgSetTagHelper.cs
  Extensions/
    IPublishedContentExtensions.cs       (namespace: Umbraco.Extensions)
  MachineInfo/
    FixedMachineInfoFactory.cs
    FixedMachineInfoFactoryOptions.cs
    FixedMachineInfoFactoryExtensions.cs
  README.md
```

- Target framework: `net10.0`
- Dependencies: `Umbraco.Cms.Core`, `SixLabors.ImageSharp`
- Namespace root: `Asm.Umbraco.*` except `IPublishedContentExtensions`
  which stays in `Umbraco.Extensions` (Umbraco idiom — views/partials
  pick up extensions via implicit `@using`).

### `Asm.Umbraco.Authentication`

```
src/Asm.Umbraco.Authentication/
  Asm.Umbraco.Authentication.csproj
  EntraId/
    EntraIdOptions.cs
    EntraIdLoginOptions.cs              (internal sealed)
    EntraIdBackOfficeOptions.cs         (internal sealed)
    EntraIdManifestReader.cs            (internal sealed)
    EntraIdAuthenticationExtensions.cs
  README.md
```

- Target framework: `net10.0`
- Dependencies: `Asm.Umbraco`, `Umbraco.Cms.Api.Management`,
  `Microsoft.AspNetCore.Authentication.MicrosoftAccount`
- Namespace root: `Asm.Umbraco.Authentication.*`

### `Asm.AspNetCore` — additions

```
src/Asm.AspNetCore/
  Middleware/
    SecurityHeadersMiddleware.cs
    SecurityHeadersOptions.cs
    SecurityHeadersMiddlewareExtensions.cs
    CanonicalUrlMiddleware.cs
    CanonicalUrlOptions.cs
    CanonicalUrlMiddlewareExtensions.cs
  Reporting/
    SecurityReportingOptions.cs
    SecurityReportingServiceCollectionExtensions.cs
    SecurityReportingEndpointExtensions.cs
```

## Public API

### `Asm.Umbraco`

```csharp
namespace Asm.Umbraco.MachineInfo;

public record FixedMachineInfoFactoryOptions
{
    public required string MachineName { get; init; }
    public string EnvironmentVariableName { get; init; } = "MACHINE_NAME";
}

public class FixedMachineInfoFactory : IMachineInfoFactory { /* ... */ }

public static class FixedMachineInfoFactoryExtensions
{
    public static IUmbracoBuilder AddFixedMachineInfoFactory(
        this IUmbracoBuilder builder,
        Action<FixedMachineInfoFactoryOptions> configure);

    public static IUmbracoBuilder AddFixedMachineInfoFactory(
        this IUmbracoBuilder builder,
        IConfigurationSection configuration);
}
```

```csharp
namespace Asm.Umbraco.TagHelpers;

[HtmlTargetElement("imgset", Attributes = "images")]
public class ImgSetTagHelper : TagHelper { /* behaviour unchanged */ }
```

```csharp
namespace Umbraco.Extensions;   // intentionally not Asm.Umbraco.Extensions

public static class IPublishedContentExtensions
{
    public static string? NameAsCssClass(this IPublishedContent model);
    public static T? ValueOr<T>(this IPublishedContent model, string alias, T other);
    public static string ValueAnd(this IPublishedContent model, string alias, string format);
}
```

### `Asm.Umbraco.Authentication`

```csharp
namespace Asm.Umbraco.Authentication.EntraId;

public record EntraIdOptions
{
    public required string TenantId { get; init; }
    public required string ClientId { get; init; }
    public required string ClientSecret { get; init; }
}

public static class EntraIdAuthenticationExtensions
{
    public static IUmbracoBuilder AddEntraIdAuthentication(
        this IUmbracoBuilder builder,
        Action<EntraIdOptions> configure);

    public static IUmbracoBuilder AddEntraIdAuthentication(
        this IUmbracoBuilder builder,
        IConfigurationSection configuration);
}
```

Internals (`EntraIdLoginOptions`, `EntraIdBackOfficeOptions`,
`EntraIdManifestReader`) are `internal sealed`. The manifest reader
returns the back-office auth-provider manifest programmatically.

### `Asm.AspNetCore` — new public surface

```csharp
namespace Asm.AspNetCore.Middleware;

public record SecurityHeadersOptions
{
    public bool RemoveServerHeaders { get; init; } = true;
    public IReadOnlyList<string> ExemptPathPrefixes { get; init; } = [];
    public IDictionary<string, string> Headers { get; init; }
        = new Dictionary<string, string>(StringComparer.Ordinal);
    public Func<HttpContext, IDictionary<string, string>>? DynamicHeaders { get; init; }
}

public static class SecurityHeadersMiddlewareExtensions
{
    public static IApplicationBuilder UseSecurityHeaders(
        this IApplicationBuilder app,
        Action<SecurityHeadersOptions> configure);
}

public record CanonicalUrlOptions
{
    public bool ForceLowercase { get; init; } = true;
    public IReadOnlyList<string> LowercaseExcludedExtensions { get; init; } = [".pdf"];
    public bool RemoveTrailingSlash { get; init; } = true;
    public IReadOnlyList<string> ExemptPathPrefixes { get; init; } = [];
}

public static class CanonicalUrlMiddlewareExtensions
{
    public static IApplicationBuilder UseCanonicalUrls(
        this IApplicationBuilder app,
        Action<CanonicalUrlOptions>? configure = null);
}
```

```csharp
namespace Asm.AspNetCore.Reporting;

public record SecurityReportingOptions
{
    public string RoutePrefix { get; init; } = "reporting";
    public string IntegrityRoute { get; init; } = "integrity";
    public string CspRoute { get; init; } = "csp";
    public string IntegrityGroupName { get; init; } = "integrity-endpoint";
    public string CspGroupName { get; init; } = "csp-endpoint";
    public int MaxAgeSeconds { get; init; } = 86400;
}

public static class SecurityReportingServiceCollectionExtensions
{
    public static IServiceCollection AddSecurityReporting(
        this IServiceCollection services,
        Action<SecurityReportingOptions>? configure = null);
}

public static class SecurityReportingEndpointExtensions
{
    public static IEndpointConventionBuilder MapSecurityReporting(
        this IEndpointRouteBuilder endpoints);
}
```

## Behaviour details

### `FixedMachineInfoFactory`

- `GetMachineIdentifier()` returns
  `Environment.GetEnvironmentVariable(options.EnvironmentVariableName)
  ?? options.MachineName`.
- `GetLocalIdentity()` preserves the existing behaviour (machine name,
  discriminator, process id, app domain id, one-shot GUID), cached on
  first call.

### `SecurityHeadersMiddleware`

1. If `ExemptPathPrefixes` matches the request path, no headers are
   added or removed. Early out.
2. On response starting:
   a. If `RemoveServerHeaders`, remove `X-Powered-By`, `X-AspNet-Version`,
      `X-AspNetMvc-Version`, `Server`.
   b. If content-type is not `text/html`, no further headers added.
   c. Add each entry from `Headers`.
   d. If `DynamicHeaders` set, invoke and merge results.
   e. If `IOptions<SecurityReportingOptions>` is registered, append
      `Reporting-Endpoints` and `Report-To` headers computed from the
      request scheme/host and the reporting options.

### `CanonicalUrlMiddleware`

1. If `ExemptPathPrefixes` matches, pass through to next.
2. If `ForceLowercase` and path contains uppercase chars and extension is
   not in `LowercaseExcludedExtensions`, 301 to lowercased path + query.
3. Else if `RemoveTrailingSlash` and path ends with `/` and is not a
   physical file/directory, 301 to trimmed path + query.
4. Else pass through.

### `MapSecurityReporting`

Maps two endpoints at `{RoutePrefix}/{IntegrityRoute}` and
`{RoutePrefix}/{CspRoute}`, both `POST`, that:

- Read the request body as a string.
- Log at `LogLevel.Warning` under categories
  `Asm.AspNetCore.Reporting.Integrity` and `Asm.AspNetCore.Reporting.Csp`
  respectively.
- Return 204 No Content.

## AmCom migration

### Deletions

```
src/AmCom.Web/Config/FixedMachineInfoFactory.cs
src/AmCom.Web/Config/AzureConfig.cs
src/AmCom.Web/Extensions/AzureLoginOptions.cs
src/AmCom.Web/Extensions/AzureBackOfficeAuthenticationOptions.cs
src/AmCom.Web/Extensions/MemberAuthenticationExtensions.cs
src/AmCom.Web/Extensions/IPublishedContentExtensions.cs
src/AmCom.Web/TagHelpers/ImgSetTagHelper.cs
src/AmCom.Web/Middleware/SecurityHeadersMiddleware.cs
src/AmCom.Web/Middleware/UrlRewriteMiddleware.cs
src/AmCom.Web/Controllers/ReportingController.cs
src/AmCom.Web/App_Plugins/my-auth-providers/   (whole folder — replaced by IPackageManifestReader)
```

The `<Content Include="App_Plugins\my-auth-providers\umbraco-package.json">`
block in `AmCom.Web.csproj` is also removed.

### `AmCom.Web.csproj` additions and removals

Add (concrete version set at publish time):

```xml
<PackageReference Include="Asm.Umbraco" Version="3.x.x" />
<PackageReference Include="Asm.Umbraco.Authentication" Version="3.x.x" />
<PackageReference Include="Asm.AspNetCore" Version="3.x.x" />
```

`Asm.AspNetCore` is added explicitly rather than relying on the transitive
reference via `Asm.AspNetCore.Mvc`, to make the middleware/reporting
dependency intentional.

Remove (now transitive via `Asm.Umbraco.Authentication`):

```xml
<PackageReference Include="Microsoft.AspNetCore.Authentication.MicrosoftAccount" ... />
```

### `Program.cs` changes

Before `umbracoBuilder.Build()`:

```csharp
umbracoBuilder.AddFixedMachineInfoFactory(opts => opts with { MachineName = "amcom" });
umbracoBuilder.AddEntraIdAuthentication(builder.Configuration.GetSection("Azure"));
```

Replace the `services.AddUnique<IMachineInfoFactory, ...>()` call.

Before `app.UseUrlRewrite()` is replaced:

```csharp
builder.Services.AddSecurityReporting(opts => opts with { RoutePrefix = "api/reporting" });
```

In the pipeline section:

```csharp
app.UseCanonicalUrls(opts => opts with
{
    ExemptPathPrefixes = ["/umbraco", "/install"]
});

// ...later, in place of app.UseCustomSecurityHeaders():
app.UseSecurityHeaders(opts => opts with
{
    ExemptPathPrefixes = ["/umbraco", "/install"],
    Headers = new Dictionary<string, string>
    {
        ["Content-Security-Policy"] = "default-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; report-to csp-endpoint",
        ["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups",
        ["Cross-Origin-Embedder-Policy"] = "require-corp",
        ["Cross-Origin-Resource-Policy"] = "same-origin",
        ["X-Frame-Options"] = "same-origin",
        ["X-Content-Type-Options"] = "nosniff",
        ["Referrer-Policy"] = "strict-origin-when-cross-origin",
        ["Permissions-Policy"] = "<preserved verbatim from AmCom's current SecurityHeadersMiddleware>"
    }
});

// After routing / MapControllers:
app.MapSecurityReporting();
```

### `_ViewImports.cshtml`

Replace `@addTagHelper *, AmCom.Web` (or equivalent existing entry that
referenced the local assembly) with `@addTagHelper *, Asm.Umbraco` so
Razor views resolve `<imgset>` to the new assembly.

### Config compatibility

AmCom keeps its existing `"Azure"` config section and `MACHINE_NAME`
environment variable. No `appsettings.json` changes required.

### Behavioural parity

No change to:
- Back-office Entra ID login flow (same scheme name `OpenIdConnect`,
  same callback path, same auto-linking behaviour)
- Security header values (verbatim from today's middleware)
- Canonical URL behaviour (lowercase + trailing-slash 301)
- Reporting endpoint URLs (`/api/reporting/integrity`,
  `/api/reporting/csp`) — preserved via `RoutePrefix = "api/reporting"`

## Solution file changes

`K:/Dev/Libraries/Asm/Asm.slnx`:
- Add `src/Asm.Umbraco/Asm.Umbraco.csproj` (remove existing `Class1.cs`
  stub first).
- Add `src/Asm.Umbraco.Authentication/Asm.Umbraco.Authentication.csproj`.

`K:/Dev/Libraries/Asm/Directory.Packages.props`:
- Add `PackageVersion` entries for Umbraco packages
  (`Umbraco.Cms.Core`, `Umbraco.Cms.Api.Management`) at the version
  AmCom currently uses (17.3.3 as of this spec).
- Add `SixLabors.ImageSharp` and
  `Microsoft.AspNetCore.Authentication.MicrosoftAccount` version pins.

## Follow-up (out of scope)

- Test projects for the new libraries. Recommended next-round work.
- Publish the new NuGet packages to the AndrewMcLachlan GitHub Packages
  feed (`ASM Framework` pipeline already handles new csproj files).
- Evaluate whether `SecurityHeadersOptions.Headers` should become a
  strongly-typed per-header record with individual setters, if other
  consumers adopt the middleware.

## Out-of-scope confirmation

- `Controllers/`, `Models/`, `Views/`, `umbraco/models/*.generated.cs`,
  `App_Plugins/`, `Program.cs` composition, data protection setup,
  forwarded-headers setup, and `AddAzureBlobMediaFileSystem()` wiring
  remain in AmCom.
