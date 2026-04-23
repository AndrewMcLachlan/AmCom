# Asm.Umbraco library extraction — implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract reusable Umbraco and ASP.NET Core code from `AndrewMcLachlan.com` (AmCom) into two new NuGet packages (`Asm.Umbraco`, `Asm.Umbraco.Authentication`) and additions to an existing one (`Asm.AspNetCore`), then migrate AmCom to consume the new packages.

**Architecture:** Two new library projects created under `K:\Dev\Libraries\Asm\src\`. Middleware and reporting endpoints added to the existing `Asm.AspNetCore` project. AmCom replaces local files with package references and a handful of `Program.cs` / `_ViewImports.cshtml` edits.

**Tech Stack:** .NET 10, Umbraco CMS 17, ASP.NET Core, SixLabors.ImageSharp, Microsoft.AspNetCore.Authentication.MicrosoftAccount.

**Spec:** `docs/specs/2026-04-23-asm-umbraco-library-extraction-design.md` (committed as `f5359e2`).

**Repos touched:**
- `K:\Dev\Libraries\Asm\` — new library code (Phase A)
- `K:\Dev\Sites\AndrewMcLachlan.com\` — consumer migration (Phase B)

**Tests:** Out of scope per the spec. Verification is via `dotnet build` after each phase and a manual smoke test after the AmCom migration.

**Cross-repo dev flow:** Phase A produces library changes; those packages must be available to AmCom before Phase B. Three options (pick at execution time):
1. Merge & publish Phase A to GitHub Packages first, then run Phase B against published versions.
2. During Phase B development, temporarily use `ProjectReference` entries in `AmCom.Web.csproj` pointing at the local library `.csproj` files; swap to `PackageReference` before merging Phase B.
3. `dotnet pack` locally and register a local NuGet source.

The plan assumes option 1 for the final state. Task B1 is where you swap in whichever approach.

---

## File structure

### New files in `K:\Dev\Libraries\Asm\`

```
src/Asm.Umbraco/
  Asm.Umbraco.csproj                     (modified — add package refs, description)
  README.md                              (new)
  TagHelpers/
    ImgSetTagHelper.cs                   (new — verbatim copy + ns change)
  Extensions/
    IPublishedContentExtensions.cs       (new — verbatim copy, keeps Umbraco.Extensions namespace)
  MachineInfo/
    FixedMachineInfoFactory.cs           (new — adapted to use options)
    FixedMachineInfoFactoryOptions.cs    (new)
    FixedMachineInfoFactoryExtensions.cs (new)

src/Asm.Umbraco.Authentication/          (new project folder)
  Asm.Umbraco.Authentication.csproj      (new)
  README.md                              (new)
  EntraId/
    EntraIdOptions.cs                    (new)
    EntraIdLoginOptions.cs               (new — internal, adapted from AzureLoginOptions)
    EntraIdBackOfficeOptions.cs          (new — internal, adapted from AzureBackOfficeAuthenticationOptions)
    EntraIdManifestReader.cs             (new — IPackageManifestReader implementation)
    EntraIdAuthenticationExtensions.cs   (new — AddEntraIdAuthentication)

src/Asm.AspNetCore/                      (existing project — add folders)
  Middleware/
    SecurityHeadersMiddleware.cs         (new)
    SecurityHeadersOptions.cs            (new)
    SecurityHeadersMiddlewareExtensions.cs (new)
    CanonicalUrlMiddleware.cs            (new)
    CanonicalUrlOptions.cs               (new)
    CanonicalUrlMiddlewareExtensions.cs  (new)
  Reporting/
    SecurityReportingOptions.cs          (new)
    SecurityReportingServiceCollectionExtensions.cs (new)
    SecurityReportingEndpointExtensions.cs (new)

Directory.Packages.props                 (modified — add Umbraco, MicrosoftAccount, ImageSharp)
Asm.slnx                                 (modified — add two new projects)
```

### Files deleted from `K:\Dev\Libraries\Asm\src\Asm.Umbraco\`

```
Class1.cs                                (stub — delete)
```

### Files deleted from `K:\Dev\Sites\AndrewMcLachlan.com\src\AmCom.Web\`

```
Config/FixedMachineInfoFactory.cs
Config/AzureConfig.cs
Extensions/AzureLoginOptions.cs
Extensions/AzureBackOfficeAuthenticationOptions.cs
Extensions/MemberAuthenticationExtensions.cs
Extensions/IPublishedContentExtensions.cs
TagHelpers/ImgSetTagHelper.cs
Middleware/SecurityHeadersMiddleware.cs
Middleware/UrlRewriteMiddleware.cs
Controllers/ReportingController.cs
App_Plugins/my-auth-providers/           (whole folder)
```

---

## Phase A — Library changes (`K:\Dev\Libraries\Asm\`)

### Task A1: Add package versions to `Directory.Packages.props`

**Files:**
- Modify: `K:\Dev\Libraries\Asm\Directory.Packages.props`

- [ ] **Step 1: Add package version entries**

Insert inside the single `<ItemGroup>` after the existing `PackageVersion` entries (alphabetise within their group):

```xml
<PackageVersion Include="Microsoft.AspNetCore.Authentication.MicrosoftAccount" Version="10.0.3" Condition="'$(TargetFramework)' == 'net10.0'" />
<PackageVersion Include="SixLabors.ImageSharp" Version="3.1.5" />
<PackageVersion Include="Umbraco.Cms.Core" Version="17.3.4" />
<PackageVersion Include="Umbraco.Cms.Api.Management" Version="17.3.4" />
```

- [ ] **Step 2: Verify solution still restores**

Run from `K:\Dev\Libraries\Asm\`:
```
dotnet restore Asm.slnx
```
Expected: Restore succeeds with no new warnings (no project references these packages yet, so versions are latent).

---

### Task A2: Set up `Asm.Umbraco` project

**Files:**
- Delete: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\Class1.cs`
- Modify: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\Asm.Umbraco.csproj`
- Modify: `K:\Dev\Libraries\Asm\Asm.slnx`

- [ ] **Step 1: Delete the stub class**

```
rm K:/Dev/Libraries/Asm/src/Asm.Umbraco/Class1.cs
```

- [ ] **Step 2: Replace `Asm.Umbraco.csproj` contents**

Replace the entire file contents with:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <Description>Asm core library for Umbraco CMS.</Description>
  </PropertyGroup>

  <ItemGroup>
    <FrameworkReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="SixLabors.ImageSharp" />
    <PackageReference Include="Umbraco.Cms.Core" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\Asm\Asm.csproj" />
  </ItemGroup>

</Project>
```

Note: this drops the `<TargetFramework>`, `<ImplicitUsings>`, and `<Nullable>` elements — all inherited from `src/Directory.Build.props` (`net10.0`, enable, enable). Matches the convention of `Asm.AspNetCore.csproj`.

- [ ] **Step 3: Add project to `Asm.slnx`**

Edit `K:\Dev\Libraries\Asm\Asm.slnx`. After the existing `<Project Path="src/Asm.OAuth/...">` entry, insert:

```xml
<Project Path="src/Asm.Umbraco/Asm.Umbraco.csproj">
  <BuildType Solution="Release 64|*" Project="Release" />
</Project>
```

(Keep alphabetical ordering — `Asm.Umbraco` goes between `Asm.Testing.Domain` and `Asm.Win32`.)

- [ ] **Step 4: Verify project builds empty**

```
dotnet build K:/Dev/Libraries/Asm/src/Asm.Umbraco/Asm.Umbraco.csproj
```
Expected: `Build succeeded. 0 Warning(s) 0 Error(s)`. XML docs warnings are fine since no public types exist yet.

---

### Task A3: Implement `FixedMachineInfoFactoryOptions`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\MachineInfo\FixedMachineInfoFactoryOptions.cs`

- [ ] **Step 1: Write the options record**

```csharp
namespace Asm.Umbraco.MachineInfo;

/// <summary>
/// Options for <see cref="FixedMachineInfoFactory"/>.
/// </summary>
public record FixedMachineInfoFactoryOptions
{
    /// <summary>
    /// The fallback machine name used when no environment variable override is set.
    /// </summary>
    public required string MachineName { get; set; }

    /// <summary>
    /// The name of the environment variable whose value, when set, overrides <see cref="MachineName"/>.
    /// Defaults to <c>MACHINE_NAME</c>.
    /// </summary>
    public string EnvironmentVariableName { get; set; } = "MACHINE_NAME";
}
```

Properties use `{ get; set; }` — not `{ get; init; }` — so that `Action<FixedMachineInfoFactoryOptions>` callbacks in the registration extensions can mutate them in place. The same applies to every options record in this plan. Records with settable properties are legal; the record still provides value equality and the with-expression. This matches the ASP.NET Core idiomatic pattern (`JwtBearerOptions`, `CorsOptions`, etc. use mutable properties).

---

### Task A4: Implement `FixedMachineInfoFactory`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\MachineInfo\FixedMachineInfoFactory.cs`

- [ ] **Step 1: Write the factory class**

```csharp
using System.Diagnostics;
using Microsoft.AspNetCore.DataProtection.Infrastructure;
using Microsoft.Extensions.Options;
using Umbraco.Cms.Core.Factories;

namespace Asm.Umbraco.MachineInfo;

/// <summary>
/// Returns a fixed machine identifier so that container restarts
/// don't create new server registrations in the database.
/// </summary>
public class FixedMachineInfoFactory : IMachineInfoFactory
{
    private readonly IApplicationDiscriminator _applicationDiscriminator;
    private readonly string _machineName;
    private string? _localIdentity;

    /// <summary>
    /// Creates a new <see cref="FixedMachineInfoFactory"/>.
    /// </summary>
    /// <param name="applicationDiscriminator">The Data Protection application discriminator.</param>
    /// <param name="options">The factory options.</param>
    public FixedMachineInfoFactory(
        IApplicationDiscriminator applicationDiscriminator,
        IOptions<FixedMachineInfoFactoryOptions> options)
    {
        _applicationDiscriminator = applicationDiscriminator;
        var opts = options.Value;
        _machineName = Environment.GetEnvironmentVariable(opts.EnvironmentVariableName) ?? opts.MachineName;
    }

    /// <inheritdoc />
    public string GetMachineIdentifier() => _machineName;

    /// <inheritdoc />
    public string GetLocalIdentity()
    {
        if (_localIdentity is not null)
        {
            return _localIdentity;
        }

        using var process = Process.GetCurrentProcess();
        _localIdentity = Environment.MachineName
                         + "/" + _applicationDiscriminator.Discriminator
                         + " [P" + process.Id
                         + "/D" + AppDomain.CurrentDomain.Id
                         + "] " + Guid.NewGuid().ToString("N").ToUpper();

        return _localIdentity;
    }
}
```

---

### Task A5: Implement `FixedMachineInfoFactoryExtensions`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\MachineInfo\FixedMachineInfoFactoryExtensions.cs`

- [ ] **Step 1: Write the extension class**

```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Factories;

namespace Asm.Umbraco.MachineInfo;

/// <summary>
/// Registration extensions for <see cref="FixedMachineInfoFactory"/>.
/// </summary>
public static class FixedMachineInfoFactoryExtensions
{
    /// <summary>
    /// Registers <see cref="FixedMachineInfoFactory"/> as the Umbraco
    /// <see cref="IMachineInfoFactory"/> with the supplied options.
    /// </summary>
    /// <param name="builder">The Umbraco builder.</param>
    /// <param name="configure">Callback to configure the factory options.</param>
    /// <returns>The Umbraco builder.</returns>
    public static IUmbracoBuilder AddFixedMachineInfoFactory(
        this IUmbracoBuilder builder,
        Action<FixedMachineInfoFactoryOptions> configure)
    {
        ArgumentNullException.ThrowIfNull(builder);
        ArgumentNullException.ThrowIfNull(configure);

        builder.Services.Configure(configure);
        builder.Services.AddUnique<IMachineInfoFactory, FixedMachineInfoFactory>();
        return builder;
    }

    /// <summary>
    /// Registers <see cref="FixedMachineInfoFactory"/> as the Umbraco
    /// <see cref="IMachineInfoFactory"/>, binding options from the supplied configuration section.
    /// </summary>
    /// <param name="builder">The Umbraco builder.</param>
    /// <param name="configuration">The configuration section to bind options from.</param>
    /// <returns>The Umbraco builder.</returns>
    public static IUmbracoBuilder AddFixedMachineInfoFactory(
        this IUmbracoBuilder builder,
        IConfigurationSection configuration)
    {
        ArgumentNullException.ThrowIfNull(builder);
        ArgumentNullException.ThrowIfNull(configuration);

        builder.Services.Configure<FixedMachineInfoFactoryOptions>(configuration);
        builder.Services.AddUnique<IMachineInfoFactory, FixedMachineInfoFactory>();
        return builder;
    }
}
```

---

### Task A6: Add `ImgSetTagHelper`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\TagHelpers\ImgSetTagHelper.cs`

- [ ] **Step 1: Write the tag helper**

```csharp
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Hosting;
using SixLabors.ImageSharp;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Extensions;

namespace Asm.Umbraco.TagHelpers;

/// <summary>
/// Renders an <c>&lt;img&gt;</c> element with a <c>srcset</c> attribute built from a
/// collection of Umbraco <see cref="IPublishedContent"/> media items, using the first item
/// as the base image and subsequent items (with a <c>scaling</c> property) as additional
/// srcset entries. Caches the image dimensions in memory when they aren't supplied by Umbraco.
/// </summary>
[HtmlTargetElement("imgset", Attributes = "images")]
public class ImgSetTagHelper(IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache) : TagHelper
{
    /// <summary>
    /// The current view context.
    /// </summary>
    [ViewContext]
    public required ViewContext ViewContext { get; set; }

    /// <summary>
    /// The collection of images. The first is the base image; each subsequent image
    /// contributes a <c>srcset</c> entry using its <c>scaling</c> property.
    /// </summary>
    [HtmlAttributeName("images")]
    public IEnumerable<IPublishedContent> Images { get; set; } = [];

    /// <summary>
    /// The web host environment.
    /// </summary>
    protected IWebHostEnvironment WebHostEnvironment { get; } = webHostEnvironment;

    /// <summary>
    /// Memory cache used to store resolved image dimensions.
    /// </summary>
    protected IMemoryCache MemoryCache { get; } = memoryCache;

    /// <inheritdoc />
    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        if (Images == null)
        {
            output.SuppressOutput();
            return;
        }

        var image = Images.FirstOrDefault();

        if (image == null)
        {
            output.SuppressOutput();
            return;
        }

        var altText = image.Value<string>("umbracoAltText");
        altText = String.IsNullOrWhiteSpace(altText) ? String.Empty : altText;

        string srcset = String.Empty;
        foreach (var img in Images.Skip(1))
        {
            var scaling = img.Value<float?>("scaling");

            if (scaling == null) continue;

            srcset += $", {img.Url()} {scaling}x";
        }
        srcset = srcset.TrimStart(", ");

        output.TagName = "img";

        output.Attributes.Add("src", image.Url());
        output.Attributes.Add("srcset", srcset);
        output.Attributes.Add("alt", altText);

        var height = image.Value<int>("umbracoHeight");
        var width = image.Value<int>("umbracoWidth");

        if (height == 0 || width == 0)
        {
            if (!WebHostEnvironment.IsDevelopment() && MemoryCache.TryGetValue(image.Url(), out (int Width, int Height) data))
            {
                width = data.Width;
                height = data.Height;
            }
            else
            {
                string cleanPath = image.Url().Replace('~', '.');
                cleanPath = cleanPath[..(cleanPath.IndexOf('?') > 0 ? cleanPath.IndexOf('?') : cleanPath.Length)];
                cleanPath = cleanPath.Replace('/', Path.DirectorySeparatorChar);

                string path = Path.Combine(WebHostEnvironment.WebRootPath, cleanPath.TrimStart('\\'));

                if (!File.Exists(path)) return;

                try
                {
                    using var imageFile = Image.Load(path);
                    width = imageFile.Width;
                    height = imageFile.Height;
                    MemoryCache.Set(image.Url(), (width, height));
                }
                catch
                {
                    // Do nothing
                }
            }
        }

        output.Attributes.Add("width", width);
        output.Attributes.Add("height", height);
    }
}
```

Behaviour verbatim from the AmCom version; only the namespace changed (`Asm.AmCom.Web.TagHelpers` → `Asm.Umbraco.TagHelpers`) and XML docs added.

---

### Task A7: Add `IPublishedContentExtensions`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\Extensions\IPublishedContentExtensions.cs`

- [ ] **Step 1: Write the extensions class**

```csharp
using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco.Extensions;   // intentional — matches Umbraco's own extension-helper namespace

/// <summary>
/// Extension helpers for <see cref="IPublishedContent"/>.
/// </summary>
public static class IPublishedContentExtensions
{
    /// <summary>
    /// Returns the content item's <c>Name</c> as a lowercase, hyphen-separated CSS class name.
    /// </summary>
    /// <param name="model">The content item.</param>
    /// <returns>The CSS-safe class name, or <c>null</c> if the model is null.</returns>
    public static string? NameAsCssClass(this IPublishedContent model) =>
        model?.Name.ToLower().Replace(' ', '-');

    /// <summary>
    /// Returns the value of the named property if it has a value, otherwise the supplied default.
    /// </summary>
    /// <typeparam name="T">The value type.</typeparam>
    /// <param name="model">The content item.</param>
    /// <param name="alias">The property alias.</param>
    /// <param name="other">The fallback value if the property has no value.</param>
    /// <returns>The property value or the fallback.</returns>
    public static T? ValueOr<T>(this IPublishedContent model, string alias, T other) =>
        model.HasValue(alias) ? model.Value<T>(alias) : other;

    /// <summary>
    /// Returns the supplied format string with the named property's value substituted in,
    /// or an empty string if the property has no value.
    /// </summary>
    /// <param name="model">The content item.</param>
    /// <param name="alias">The property alias.</param>
    /// <param name="format">A composite format string with a single placeholder.</param>
    /// <returns>The formatted string, or <see cref="String.Empty"/>.</returns>
    public static string ValueAnd(this IPublishedContent model, string alias, string format) =>
        model.HasValue(alias) ? String.Format(format, model.Value<string>(alias)) : String.Empty;
}
```

---

### Task A8: Add `Asm.Umbraco` README

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco\README.md`

- [ ] **Step 1: Write the README**

```markdown
# Asm.Umbraco

Core helpers for Umbraco CMS applications:

- `FixedMachineInfoFactory` — an `IMachineInfoFactory` that returns a stable machine identifier, suitable for container deployments where a random name would cause duplicate server registrations on restart.
- `ImgSetTagHelper` — a Razor tag helper that renders an `<img>` with a `srcset` built from a collection of Umbraco media items.
- `IPublishedContent` extensions — `NameAsCssClass()`, `ValueOr<T>()`, `ValueAnd()`.

## Usage

```csharp
umbracoBuilder.AddFixedMachineInfoFactory(opts => opts with { MachineName = "myapp" });
```

Or, bind from configuration:

```csharp
umbracoBuilder.AddFixedMachineInfoFactory(builder.Configuration.GetSection("MachineInfo"));
```

Register the tag helpers in `_ViewImports.cshtml`:

```razor
@addTagHelper *, Asm.Umbraco
```
```

---

### Task A9: Build and commit `Asm.Umbraco`

- [ ] **Step 1: Build the project**

```
dotnet build K:/Dev/Libraries/Asm/src/Asm.Umbraco/Asm.Umbraco.csproj
```
Expected: `Build succeeded. 0 Warning(s) 0 Error(s)`.

- [ ] **Step 2: Build the whole solution**

```
dotnet build K:/Dev/Libraries/Asm/Asm.slnx
```
Expected: solution-wide build success.

- [ ] **Step 3: Commit**

```
git -C K:/Dev/Libraries/Asm add Directory.Packages.props Asm.slnx src/Asm.Umbraco/
git -C K:/Dev/Libraries/Asm commit -m "Add Asm.Umbraco package with tag helper, machine info factory, and content extensions"
```

---

### Task A10: Set up `Asm.Umbraco.Authentication` project

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\Asm.Umbraco.Authentication.csproj`
- Modify: `K:\Dev\Libraries\Asm\Asm.slnx`

- [ ] **Step 1: Create the csproj file**

Write to `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\Asm.Umbraco.Authentication.csproj`:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <Description>Back-office authentication helpers for Umbraco CMS (Microsoft Entra ID).</Description>
  </PropertyGroup>

  <ItemGroup>
    <FrameworkReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Authentication.MicrosoftAccount" />
    <PackageReference Include="Umbraco.Cms.Api.Management" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\Asm.Umbraco\Asm.Umbraco.csproj" />
  </ItemGroup>

</Project>
```

- [ ] **Step 2: Add project to `Asm.slnx`**

Insert immediately after the `Asm.Umbraco` entry (alphabetical):

```xml
<Project Path="src/Asm.Umbraco.Authentication/Asm.Umbraco.Authentication.csproj">
  <BuildType Solution="Release 64|*" Project="Release" />
</Project>
```

- [ ] **Step 3: Verify empty project builds**

```
dotnet build K:/Dev/Libraries/Asm/src/Asm.Umbraco.Authentication/Asm.Umbraco.Authentication.csproj
```
Expected: build succeeds.

---

### Task A11: Implement `EntraIdOptions`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\EntraId\EntraIdOptions.cs`

- [ ] **Step 1: Write the options record**

```csharp
namespace Asm.Umbraco.Authentication.EntraId;

/// <summary>
/// Microsoft Entra ID application settings used when configuring Umbraco back-office login.
/// </summary>
public record EntraIdOptions
{
    /// <summary>
    /// The Entra ID tenant identifier (GUID) the application is registered against.
    /// </summary>
    public required string TenantId { get; set; }

    /// <summary>
    /// The Entra ID application (client) identifier.
    /// </summary>
    public required string ClientId { get; set; }

    /// <summary>
    /// The Entra ID application client secret.
    /// </summary>
    public required string ClientSecret { get; set; }
}
```

---

### Task A12: Implement `EntraIdLoginOptions` (internal)

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\EntraId\EntraIdLoginOptions.cs`

- [ ] **Step 1: Write the class**

```csharp
using Microsoft.Extensions.Options;
using Umbraco.Cms.Api.Management.Security;
using Umbraco.Cms.Core;

namespace Asm.Umbraco.Authentication.EntraId;

/// <summary>
/// Configures the Umbraco back-office external-login provider for Microsoft Entra ID.
/// </summary>
internal sealed class EntraIdLoginOptions : IConfigureNamedOptions<BackOfficeExternalLoginProviderOptions>
{
    /// <summary>
    /// The scheme name (without Umbraco's back-office prefix) used for the Entra ID login provider.
    /// </summary>
    public const string SchemeName = "OpenIdConnect";

    public void Configure(string? name, BackOfficeExternalLoginProviderOptions options)
    {
        if (name == Constants.Security.BackOfficeExternalAuthenticationTypePrefix + SchemeName)
        {
            Configure(options);
        }
    }

    public void Configure(BackOfficeExternalLoginProviderOptions options)
    {
        options.AutoLinkOptions = new ExternalSignInAutoLinkOptions(
            autoLinkExternalAccount: true,
            defaultUserGroups: [Constants.Security.EditorGroupKey.ToString()],
            defaultCulture: null)
        {
            OnAutoLinking = (autoLinkUser, loginInfo) =>
            {
                autoLinkUser.IsApproved = true;
            },
            OnExternalLogin = (user, loginInfo) => true,
        };

        options.DenyLocalLogin = false;
    }
}
```

---

### Task A13: Implement `EntraIdBackOfficeOptions` (internal)

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\EntraId\EntraIdBackOfficeOptions.cs`

- [ ] **Step 1: Write the class**

```csharp
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.Extensions.Options;
using Umbraco.Cms.Core;

namespace Asm.Umbraco.Authentication.EntraId;

/// <summary>
/// Configures <see cref="MicrosoftAccountOptions"/> with Entra ID tenant-scoped endpoints
/// for the Umbraco back-office external-login scheme.
/// </summary>
internal sealed class EntraIdBackOfficeOptions(IOptions<EntraIdOptions> entraIdOptions)
    : IConfigureNamedOptions<MicrosoftAccountOptions>
{
    public void Configure(string? name, MicrosoftAccountOptions options)
    {
        if (name == Constants.Security.BackOfficeExternalAuthenticationTypePrefix + EntraIdLoginOptions.SchemeName)
        {
            Configure(options);
        }
    }

    public void Configure(MicrosoftAccountOptions options)
    {
        var entraId = entraIdOptions.Value;
        options.CallbackPath = "/signin-oidc";
        options.ClientId = entraId.ClientId;
        options.ClientSecret = entraId.ClientSecret;
        options.TokenEndpoint = $"https://login.microsoftonline.com/{entraId.TenantId}/oauth2/v2.0/token";
        options.AuthorizationEndpoint = $"https://login.microsoftonline.com/{entraId.TenantId}/oauth2/v2.0/authorize";
    }
}
```

---

### Task A14: Implement `EntraIdManifestReader`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\EntraId\EntraIdManifestReader.cs`

- [ ] **Step 1: Write the reader**

```csharp
using Umbraco.Cms.Core.Manifest;
using Umbraco.Cms.Core.Models.Manifest;

namespace Asm.Umbraco.Authentication.EntraId;

/// <summary>
/// Supplies the back-office authentication-provider manifest for Entra ID
/// programmatically, avoiding the need for an <c>App_Plugins</c> folder in consumers.
/// </summary>
internal sealed class EntraIdManifestReader : IPackageManifestReader
{
    public Task<IEnumerable<PackageManifest>> ReadPackageManifestsAsync()
    {
        var manifest = new PackageManifest
        {
            Name = "Asm.Umbraco.Authentication.EntraId",
            AllowPublicAccess = true,
            Extensions =
            [
                new
                {
                    type = "authProvider",
                    alias = "Asm.AuthProvider.EntraId",
                    name = "Microsoft Entra ID Auth Provider",
                    forProviderName = Umbraco.Cms.Core.Constants.Security.BackOfficeExternalAuthenticationTypePrefix + EntraIdLoginOptions.SchemeName,
                    meta = new { label = "Microsoft" }
                }
            ]
        };

        return Task.FromResult<IEnumerable<PackageManifest>>([manifest]);
    }
}
```

Note: `Extensions` is declared `object[]` on `PackageManifest` in Umbraco 17 and serialized to JSON for the back-office client. The anonymous object shape mirrors the existing `App_Plugins/my-auth-providers/umbraco-package.json`. The `forProviderName` uses the fully-prefixed scheme (`Umbraco.OpenIdConnect`) that the back-office client matches against.

- [ ] **Step 2: Verify namespaces resolve during build**

```
dotnet build K:/Dev/Libraries/Asm/src/Asm.Umbraco.Authentication/Asm.Umbraco.Authentication.csproj
```
Expected: build succeeds. If `PackageManifest` lives in a different namespace in Umbraco 17.3.4, update the `using` line (try `Umbraco.Cms.Core.Manifest` and `Umbraco.Cms.Core.Models.Manifest`).

---

### Task A15: Implement `EntraIdAuthenticationExtensions`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\EntraId\EntraIdAuthenticationExtensions.cs`

- [ ] **Step 1: Write the extension methods**

```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Api.Management.Security;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Manifest;

namespace Asm.Umbraco.Authentication.EntraId;

/// <summary>
/// Registration extensions for Microsoft Entra ID back-office authentication.
/// </summary>
public static class EntraIdAuthenticationExtensions
{
    /// <summary>
    /// Registers Microsoft Entra ID as an Umbraco back-office external login provider
    /// using the supplied configuration action.
    /// </summary>
    /// <param name="builder">The Umbraco builder.</param>
    /// <param name="configure">Callback to configure the Entra ID options.</param>
    /// <returns>The Umbraco builder.</returns>
    public static IUmbracoBuilder AddEntraIdAuthentication(
        this IUmbracoBuilder builder,
        Action<EntraIdOptions> configure)
    {
        ArgumentNullException.ThrowIfNull(builder);
        ArgumentNullException.ThrowIfNull(configure);

        builder.Services.Configure(configure);
        return AddEntraIdCore(builder);
    }

    /// <summary>
    /// Registers Microsoft Entra ID as an Umbraco back-office external login provider,
    /// binding options from the supplied configuration section.
    /// </summary>
    /// <param name="builder">The Umbraco builder.</param>
    /// <param name="configuration">The configuration section to bind options from.</param>
    /// <returns>The Umbraco builder.</returns>
    public static IUmbracoBuilder AddEntraIdAuthentication(
        this IUmbracoBuilder builder,
        IConfigurationSection configuration)
    {
        ArgumentNullException.ThrowIfNull(builder);
        ArgumentNullException.ThrowIfNull(configuration);

        builder.Services.Configure<EntraIdOptions>(configuration);
        return AddEntraIdCore(builder);
    }

    private static IUmbracoBuilder AddEntraIdCore(IUmbracoBuilder builder)
    {
        builder.Services.ConfigureOptions<EntraIdLoginOptions>();
        builder.Services.ConfigureOptions<EntraIdBackOfficeOptions>();
        builder.Services.AddSingleton<IPackageManifestReader, EntraIdManifestReader>();

        builder.AddBackOfficeExternalLogins(logins =>
        {
            logins.AddBackOfficeLogin(backOfficeAuthenticationBuilder =>
            {
                var schemeName = BackOfficeAuthenticationBuilder.SchemeForBackOffice(EntraIdLoginOptions.SchemeName);
                ArgumentNullException.ThrowIfNull(schemeName, nameof(schemeName));

                backOfficeAuthenticationBuilder.AddMicrosoftAccount(
                    schemeName,
                    options => { /* configured via EntraIdBackOfficeOptions */ });
            });
        });

        return builder;
    }
}
```

---

### Task A16: Add `Asm.Umbraco.Authentication` README

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.Umbraco.Authentication\README.md`

- [ ] **Step 1: Write the README**

```markdown
# Asm.Umbraco.Authentication

Back-office authentication helpers for Umbraco CMS.

## Microsoft Entra ID

Adds a Microsoft Entra ID external login provider to the Umbraco back office. Registers a `IPackageManifestReader` so the login button appears in the back-office SPA without any `App_Plugins` folder in the consuming application.

### Usage

```csharp
// Bind options from configuration:
umbracoBuilder.AddEntraIdAuthentication(builder.Configuration.GetSection("EntraId"));

// Or configure inline:
umbracoBuilder.AddEntraIdAuthentication(opts => opts with
{
    TenantId = "...",
    ClientId = "...",
    ClientSecret = "..."
});
```

### Configuration shape

```json
{
  "EntraId": {
    "TenantId": "...",
    "ClientId": "...",
    "ClientSecret": "..."
  }
}
```

### App registration

Register the app in Entra ID with redirect URI `https://<your-host>/signin-oidc`. Grant `openid`, `profile`, and `email` delegated permissions.
```

---

### Task A17: Build and commit `Asm.Umbraco.Authentication`

- [ ] **Step 1: Build the project**

```
dotnet build K:/Dev/Libraries/Asm/src/Asm.Umbraco.Authentication/Asm.Umbraco.Authentication.csproj
```
Expected: build succeeds.

- [ ] **Step 2: Build the solution**

```
dotnet build K:/Dev/Libraries/Asm/Asm.slnx
```
Expected: success.

- [ ] **Step 3: Commit**

```
git -C K:/Dev/Libraries/Asm add Asm.slnx src/Asm.Umbraco.Authentication/
git -C K:/Dev/Libraries/Asm commit -m "Add Asm.Umbraco.Authentication with Entra ID back-office login"
```

---

### Task A18: Implement `SecurityHeadersOptions`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Middleware\SecurityHeadersOptions.cs`

- [ ] **Step 1: Write the options record**

```csharp
using Microsoft.AspNetCore.Http;

namespace Asm.AspNetCore.Middleware;

/// <summary>
/// Options for <see cref="SecurityHeadersMiddleware"/>.
/// </summary>
public record SecurityHeadersOptions
{
    /// <summary>
    /// When true, removes server-fingerprint response headers
    /// (<c>X-Powered-By</c>, <c>X-AspNet-Version</c>, <c>X-AspNetMvc-Version</c>, <c>Server</c>).
    /// Defaults to true.
    /// </summary>
    public bool RemoveServerHeaders { get; set; } = true;

    /// <summary>
    /// Request paths (by prefix) that should bypass security-header processing entirely.
    /// Match is case-insensitive. Defaults to empty.
    /// </summary>
    public IReadOnlyList<string> ExemptPathPrefixes { get; set; } = [];

    /// <summary>
    /// Static headers added to all HTML responses (after fingerprint stripping).
    /// </summary>
    public IDictionary<string, string> Headers { get; set; }
        = new Dictionary<string, string>(StringComparer.Ordinal);

    /// <summary>
    /// Optional callback producing additional headers computed per-request (e.g., containing
    /// the request scheme or host). Merged after <see cref="Headers"/>.
    /// </summary>
    public Func<HttpContext, IDictionary<string, string>>? DynamicHeaders { get; set; }
}
```

---

### Task A19: Implement `SecurityHeadersMiddleware`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Middleware\SecurityHeadersMiddleware.cs`

- [ ] **Step 1: Write the middleware**

Note: this depends on `SecurityReportingOptions` from Task A22. That's fine — the file will compile once Task A22 is done. Build verification happens at Task A24.

```csharp
using Asm.AspNetCore.Reporting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Asm.AspNetCore.Middleware;

/// <summary>
/// Adds a configurable set of security response headers to HTML responses and, optionally,
/// strips server-fingerprint headers from all responses.
/// </summary>
/// <remarks>
/// If <see cref="SecurityReportingOptions"/> is registered in DI, the middleware also
/// emits <c>Reporting-Endpoints</c> and <c>Report-To</c> headers referencing the
/// configured reporting routes. If not registered, those headers are omitted.
/// </remarks>
public class SecurityHeadersMiddleware
{
    private readonly RequestDelegate _next;
    private readonly SecurityHeadersOptions _options;
    private readonly SecurityReportingOptions? _reportingOptions;

    /// <summary>
    /// Creates a new <see cref="SecurityHeadersMiddleware"/>.
    /// </summary>
    /// <param name="next">The next middleware in the pipeline.</param>
    /// <param name="options">The security-headers options.</param>
    /// <param name="reportingOptions">Optional reporting options. When present (i.e.
    /// <c>AddSecurityReporting()</c> was called), the middleware emits
    /// <c>Reporting-Endpoints</c> and <c>Report-To</c> headers.</param>
    public SecurityHeadersMiddleware(
        RequestDelegate next,
        IOptions<SecurityHeadersOptions> options,
        SecurityReportingOptions? reportingOptions = null)
    {
        _next = next;
        _options = options.Value;
        _reportingOptions = reportingOptions;
    }

    /// <summary>
    /// Processes the request and attaches security headers to the response.
    /// </summary>
    public async Task InvokeAsync(HttpContext context)
    {
        if (IsExempt(context.Request.Path.Value))
        {
            await _next(context);
            return;
        }

        context.Response.OnStarting(() =>
        {
            if (_options.RemoveServerHeaders)
            {
                context.Response.Headers.Remove("X-Powered-By");
                context.Response.Headers.Remove("X-AspNet-Version");
                context.Response.Headers.Remove("X-AspNetMvc-Version");
                context.Response.Headers.Remove("Server");
            }

            var contentType = context.Response.ContentType;
            if (contentType == null || !contentType.StartsWith("text/html", StringComparison.OrdinalIgnoreCase))
            {
                return Task.CompletedTask;
            }

            foreach (var (name, value) in _options.Headers)
            {
                context.Response.Headers.Append(name, value);
            }

            if (_options.DynamicHeaders is { } dynamic)
            {
                foreach (var (name, value) in dynamic(context))
                {
                    context.Response.Headers.Append(name, value);
                }
            }

            if (_reportingOptions is { } reporting)
            {
                context.Response.Headers.Append(
                    "Reporting-Endpoints",
                    SecurityReportingHeaderBuilder.BuildReportingEndpoints(context, reporting));
                context.Response.Headers.Append(
                    "Report-To",
                    SecurityReportingHeaderBuilder.BuildReportTo(context, reporting));
            }

            return Task.CompletedTask;
        });

        await _next(context);
    }

    private bool IsExempt(string? path)
    {
        if (string.IsNullOrEmpty(path) || _options.ExemptPathPrefixes.Count == 0)
        {
            return false;
        }

        foreach (var prefix in _options.ExemptPathPrefixes)
        {
            if (path.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
        }
        return false;
    }
}
```

The type `SecurityReportingHeaderBuilder` is introduced in Task A22.

---

### Task A20: Implement `SecurityHeadersMiddlewareExtensions`

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Middleware\SecurityHeadersMiddlewareExtensions.cs`

- [ ] **Step 1: Write the extensions**

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Options;

namespace Asm.AspNetCore.Middleware;

/// <summary>
/// Application-builder extensions for <see cref="SecurityHeadersMiddleware"/>.
/// </summary>
public static class SecurityHeadersMiddlewareExtensions
{
    /// <summary>
    /// Adds <see cref="SecurityHeadersMiddleware"/> to the pipeline with the supplied options.
    /// </summary>
    /// <param name="app">The application builder.</param>
    /// <param name="configure">Callback to configure the security headers.</param>
    /// <returns>The application builder.</returns>
    public static IApplicationBuilder UseSecurityHeaders(
        this IApplicationBuilder app,
        Action<SecurityHeadersOptions> configure)
    {
        ArgumentNullException.ThrowIfNull(app);
        ArgumentNullException.ThrowIfNull(configure);

        var options = new SecurityHeadersOptions();
        configure(options);

        return app.UseMiddleware<SecurityHeadersMiddleware>(Options.Create(options));
    }
}
```

The options are built eagerly and passed directly via `UseMiddleware`'s arg-matching, which supplies them to the `IOptions<SecurityHeadersOptions>` constructor parameter on the middleware.

---

### Task A21: Implement `CanonicalUrlOptions`, middleware, and extensions

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Middleware\CanonicalUrlOptions.cs`
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Middleware\CanonicalUrlMiddleware.cs`
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Middleware\CanonicalUrlMiddlewareExtensions.cs`

- [ ] **Step 1: Write `CanonicalUrlOptions.cs`**

```csharp
namespace Asm.AspNetCore.Middleware;

/// <summary>
/// Options for <see cref="CanonicalUrlMiddleware"/>.
/// </summary>
public record CanonicalUrlOptions
{
    /// <summary>
    /// When true, redirects paths containing uppercase characters to their lowercase form
    /// (using 301 Moved Permanently).
    /// </summary>
    public bool ForceLowercase { get; set; } = true;

    /// <summary>
    /// File extensions that are exempt from lowercase redirection.
    /// Matched case-insensitively; leading dot required.
    /// </summary>
    public IReadOnlyList<string> LowercaseExcludedExtensions { get; set; } = [".pdf"];

    /// <summary>
    /// When true, redirects paths ending in <c>/</c> to their trimmed form,
    /// unless the path resolves to a physical file or directory.
    /// </summary>
    public bool RemoveTrailingSlash { get; set; } = true;

    /// <summary>
    /// Request path prefixes that bypass canonicalisation entirely.
    /// Match is case-insensitive.
    /// </summary>
    public IReadOnlyList<string> ExemptPathPrefixes { get; set; } = [];
}
```

- [ ] **Step 2: Write `CanonicalUrlMiddleware.cs`**

```csharp
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Asm.AspNetCore.Middleware;

/// <summary>
/// Enforces a canonical URL form — lowercase path, no trailing slash — via 301 redirects.
/// </summary>
public class CanonicalUrlMiddleware
{
    private readonly RequestDelegate _next;
    private readonly CanonicalUrlOptions _options;

    /// <summary>
    /// Creates a new <see cref="CanonicalUrlMiddleware"/>.
    /// </summary>
    public CanonicalUrlMiddleware(RequestDelegate next, IOptions<CanonicalUrlOptions> options)
    {
        _next = next;
        _options = options.Value;
    }

    /// <summary>
    /// Processes the request, emitting 301 redirects to enforce the canonical URL form.
    /// </summary>
    public async Task InvokeAsync(HttpContext context)
    {
        var path = context.Request.Path.Value;
        var queryString = context.Request.QueryString.Value;

        if (IsExempt(path) || string.IsNullOrEmpty(path))
        {
            await _next(context);
            return;
        }

        if (_options.ForceLowercase && HasUpper(path) && !HasExcludedExtension(path))
        {
            context.Response.StatusCode = StatusCodes.Status301MovedPermanently;
            context.Response.Headers.Location = path.ToLowerInvariant() + queryString;
            return;
        }

        if (_options.RemoveTrailingSlash && path.Length > 1 && path.EndsWith('/'))
        {
            var trimmed = path.TrimEnd('/');
            var physicalPath = context.Request.PathBase.Add(context.Request.Path).Value;
            var isDirectory = Directory.Exists(physicalPath);
            var isFile = File.Exists(physicalPath);

            if (!isDirectory && !isFile)
            {
                context.Response.StatusCode = StatusCodes.Status301MovedPermanently;
                context.Response.Headers.Location = trimmed + queryString;
                return;
            }
        }

        await _next(context);
    }

    private bool IsExempt(string? path)
    {
        if (string.IsNullOrEmpty(path) || _options.ExemptPathPrefixes.Count == 0)
        {
            return false;
        }

        foreach (var prefix in _options.ExemptPathPrefixes)
        {
            if (path.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
        }
        return false;
    }

    private static bool HasUpper(string path)
    {
        foreach (var c in path)
        {
            if (char.IsUpper(c)) return true;
        }
        return false;
    }

    private bool HasExcludedExtension(string path)
    {
        foreach (var ext in _options.LowercaseExcludedExtensions)
        {
            if (path.EndsWith(ext, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
        }
        return false;
    }
}
```

- [ ] **Step 3: Write `CanonicalUrlMiddlewareExtensions.cs`**

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Options;

namespace Asm.AspNetCore.Middleware;

/// <summary>
/// Application-builder extensions for <see cref="CanonicalUrlMiddleware"/>.
/// </summary>
public static class CanonicalUrlMiddlewareExtensions
{
    /// <summary>
    /// Adds <see cref="CanonicalUrlMiddleware"/> to the pipeline.
    /// </summary>
    /// <param name="app">The application builder.</param>
    /// <param name="configure">Optional callback to configure canonicalisation options.</param>
    /// <returns>The application builder.</returns>
    public static IApplicationBuilder UseCanonicalUrls(
        this IApplicationBuilder app,
        Action<CanonicalUrlOptions>? configure = null)
    {
        ArgumentNullException.ThrowIfNull(app);

        var options = new CanonicalUrlOptions();
        configure?.Invoke(options);

        return app.UseMiddleware<CanonicalUrlMiddleware>(Options.Create(options));
    }
}
```

---

### Task A22: Implement `SecurityReportingOptions` and header builder

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Reporting\SecurityReportingOptions.cs`
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Reporting\SecurityReportingHeaderBuilder.cs`

- [ ] **Step 1: Write `SecurityReportingOptions.cs`**

```csharp
namespace Asm.AspNetCore.Reporting;

/// <summary>
/// Options governing the security-reporting endpoints and the associated
/// <c>Reporting-Endpoints</c> / <c>Report-To</c> response headers.
/// </summary>
public record SecurityReportingOptions
{
    /// <summary>
    /// Route prefix for the reporting endpoints. Defaults to <c>"reporting"</c>.
    /// </summary>
    public string RoutePrefix { get; set; } = "reporting";

    /// <summary>
    /// Route segment for the integrity-violation endpoint. Appended to <see cref="RoutePrefix"/>.
    /// </summary>
    public string IntegrityRoute { get; set; } = "integrity";

    /// <summary>
    /// Route segment for the Content Security Policy report endpoint. Appended to <see cref="RoutePrefix"/>.
    /// </summary>
    public string CspRoute { get; set; } = "csp";

    /// <summary>
    /// Group name used for the integrity reporting endpoint in the
    /// <c>Reporting-Endpoints</c> header and the <c>Report-To</c> group entry.
    /// </summary>
    public string IntegrityGroupName { get; set; } = "integrity-endpoint";

    /// <summary>
    /// Group name used for the CSP reporting endpoint in the
    /// <c>Reporting-Endpoints</c> header and the <c>Report-To</c> group entry.
    /// </summary>
    public string CspGroupName { get; set; } = "csp-endpoint";

    /// <summary>
    /// <c>max_age</c> value (in seconds) emitted in the <c>Report-To</c> groups. Defaults to 24 hours.
    /// </summary>
    public int MaxAgeSeconds { get; set; } = 86400;
}
```

- [ ] **Step 2: Write `SecurityReportingHeaderBuilder.cs`**

```csharp
using Microsoft.AspNetCore.Http;

namespace Asm.AspNetCore.Reporting;

/// <summary>
/// Builds the <c>Reporting-Endpoints</c> and <c>Report-To</c> header values for the
/// configured security-reporting endpoints.
/// </summary>
public static class SecurityReportingHeaderBuilder
{
    /// <summary>
    /// Builds the <c>Reporting-Endpoints</c> header value.
    /// </summary>
    public static string BuildReportingEndpoints(HttpContext ctx, SecurityReportingOptions options)
    {
        var integrityUrl = BuildEndpointUrl(ctx, options.RoutePrefix, options.IntegrityRoute);
        var cspUrl = BuildEndpointUrl(ctx, options.RoutePrefix, options.CspRoute);
        return $"{options.IntegrityGroupName}=\"{integrityUrl}\", {options.CspGroupName}=\"{cspUrl}\"";
    }

    /// <summary>
    /// Builds the <c>Report-To</c> header value (legacy multi-group JSON form).
    /// </summary>
    public static string BuildReportTo(HttpContext ctx, SecurityReportingOptions options)
    {
        var integrityUrl = BuildEndpointUrl(ctx, options.RoutePrefix, options.IntegrityRoute);
        var cspUrl = BuildEndpointUrl(ctx, options.RoutePrefix, options.CspRoute);
        return $"{{\"group\":\"{options.IntegrityGroupName}\",\"max_age\":{options.MaxAgeSeconds},\"endpoints\":[{{\"url\":\"{integrityUrl}\"}}]}}, "
             + $"{{\"group\":\"{options.CspGroupName}\",\"max_age\":{options.MaxAgeSeconds},\"endpoints\":[{{\"url\":\"{cspUrl}\"}}]}}";
    }

    private static string BuildEndpointUrl(HttpContext ctx, string routePrefix, string route) =>
        $"{ctx.Request.Scheme}://{ctx.Request.Host}/{routePrefix.TrimStart('/').TrimEnd('/')}/{route.TrimStart('/')}";
}
```

---

### Task A23: Implement reporting service + endpoint extensions

**Files:**
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Reporting\SecurityReportingServiceCollectionExtensions.cs`
- Create: `K:\Dev\Libraries\Asm\src\Asm.AspNetCore\Reporting\SecurityReportingEndpointExtensions.cs`

- [ ] **Step 1: Write `SecurityReportingServiceCollectionExtensions.cs`**

```csharp
using Microsoft.Extensions.DependencyInjection;

namespace Asm.AspNetCore.Reporting;

/// <summary>
/// Service-collection extensions for registering the security-reporting options.
/// </summary>
public static class SecurityReportingServiceCollectionExtensions
{
    /// <summary>
    /// Registers <see cref="SecurityReportingOptions"/> in the service collection.
    /// When registered, <see cref="Middleware.SecurityHeadersMiddleware"/> automatically
    /// emits <c>Reporting-Endpoints</c> and <c>Report-To</c> headers.
    /// </summary>
    /// <param name="services">The service collection.</param>
    /// <param name="configure">Optional callback to customise options.</param>
    /// <returns>The service collection.</returns>
    public static IServiceCollection AddSecurityReporting(
        this IServiceCollection services,
        Action<SecurityReportingOptions>? configure = null)
    {
        ArgumentNullException.ThrowIfNull(services);

        var options = new SecurityReportingOptions();
        configure?.Invoke(options);

        // Registered as a singleton (not via services.Configure<T>) so that the
        // SecurityHeadersMiddleware can detect its absence — IOptions<T> is always
        // resolvable and wouldn't signal "reporting not configured".
        services.AddSingleton(options);
        return services;
    }
}
```

- [ ] **Step 2: Write `SecurityReportingEndpointExtensions.cs`**

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Asm.AspNetCore.Reporting;

/// <summary>
/// Endpoint-routing extensions for mapping the security-reporting endpoints.
/// </summary>
public static class SecurityReportingEndpointExtensions
{
    /// <summary>
    /// Logger category used for integrity-report messages.
    /// </summary>
    public const string IntegrityLoggerCategory = "Asm.AspNetCore.Reporting.Integrity";

    /// <summary>
    /// Logger category used for CSP report messages.
    /// </summary>
    public const string CspLoggerCategory = "Asm.AspNetCore.Reporting.Csp";

    /// <summary>
    /// Maps the security-reporting endpoints.
    /// Requires <see cref="SecurityReportingServiceCollectionExtensions.AddSecurityReporting"/>
    /// to have been called.
    /// </summary>
    /// <param name="endpoints">The endpoint-route builder.</param>
    /// <returns>The endpoint-convention builder for further configuration.</returns>
    public static IEndpointConventionBuilder MapSecurityReporting(this IEndpointRouteBuilder endpoints)
    {
        ArgumentNullException.ThrowIfNull(endpoints);

        var options = endpoints.ServiceProvider.GetRequiredService<SecurityReportingOptions>();
        var loggerFactory = endpoints.ServiceProvider.GetRequiredService<ILoggerFactory>();
        var integrityLogger = loggerFactory.CreateLogger(IntegrityLoggerCategory);
        var cspLogger = loggerFactory.CreateLogger(CspLoggerCategory);

        var group = endpoints.MapGroup(options.RoutePrefix.TrimStart('/').TrimEnd('/'));

        group.MapPost(options.IntegrityRoute.TrimStart('/'), async (HttpContext ctx) =>
        {
            using var reader = new StreamReader(ctx.Request.Body);
            var body = await reader.ReadToEndAsync();
            integrityLogger.LogWarning("Integrity Report ({ContentType}): {Report}", ctx.Request.ContentType, body);
            return Results.NoContent();
        });

        group.MapPost(options.CspRoute.TrimStart('/'), async (HttpContext ctx) =>
        {
            using var reader = new StreamReader(ctx.Request.Body);
            var body = await reader.ReadToEndAsync();
            cspLogger.LogWarning("CSP Report ({ContentType}): {Report}", ctx.Request.ContentType, body);
            return Results.NoContent();
        });

        return group;
    }
}
```

---

### Task A24: Build and commit `Asm.AspNetCore` additions

- [ ] **Step 1: Build the project**

```
dotnet build K:/Dev/Libraries/Asm/src/Asm.AspNetCore/Asm.AspNetCore.csproj
```
Expected: `Build succeeded. 0 Warning(s) 0 Error(s)`.

- [ ] **Step 2: Build the whole solution**

```
dotnet build K:/Dev/Libraries/Asm/Asm.slnx
```
Expected: success.

- [ ] **Step 3: Commit**

```
git -C K:/Dev/Libraries/Asm add src/Asm.AspNetCore/
git -C K:/Dev/Libraries/Asm commit -m "Add security headers, canonical URL, and security reporting middleware to Asm.AspNetCore"
```

---

### Handoff — library packages

Before Phase B can build against `PackageReference`s, the libraries must be published to the AndrewMcLachlan GitHub Packages feed. Follow the repo's normal release workflow (open a PR in `K:\Dev\Libraries\Asm\`, merge, CI publishes). Alternatively, during dev, swap in `ProjectReference` entries in AmCom's csproj as described in the plan header.

---

## Phase B — AmCom migration (`K:\Dev\Sites\AndrewMcLachlan.com\`)

### Task B1: Update `AmCom.Web.csproj` package references

**Files:**
- Modify: `K:\Dev\Sites\AndrewMcLachlan.com\src\AmCom.Web\AmCom.Web.csproj`

- [ ] **Step 1: Add new package references**

Inside the `<ItemGroup>` containing the existing `Asm.*` entries (currently `Asm`, `Asm.AspNetCore.Mvc`, `Asm.Net`), add:

```xml
<PackageReference Include="Asm.AspNetCore" Version="3.7.54" />
<PackageReference Include="Asm.Umbraco" Version="3.7.54" />
<PackageReference Include="Asm.Umbraco.Authentication" Version="3.7.54" />
```

Use the latest published `Asm.*` version — bump the existing `3.7.54` pins to whatever the new libraries are published under.

- [ ] **Step 2: Remove the redundant direct dependency**

Remove this line (now transitive via `Asm.Umbraco.Authentication`):

```xml
<PackageReference Include="Microsoft.AspNetCore.Authentication.MicrosoftAccount" Version="10.0.7" />
```

- [ ] **Step 3: Remove the App_Plugins Content include**

Remove this block:

```xml
<ItemGroup>
  <Content Include="App_Plugins\my-auth-providers\umbraco-package.json">
    <CopyToOutputDirectory>Always</CopyToOutputDirectory>
  </Content>
</ItemGroup>
```

- [ ] **Step 4: Restore**

```
dotnet restore K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/AmCom.Web.csproj
```
Expected: restore succeeds. The new packages resolve from the GitHub Packages feed.

---

### Task B2: Delete replaced AmCom source files

**Files:**
- Delete (10 files + 1 folder):

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
src/AmCom.Web/App_Plugins/my-auth-providers/     (entire folder)
```

- [ ] **Step 1: Delete the source files**

```
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Config/FixedMachineInfoFactory.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Config/AzureConfig.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Extensions/AzureLoginOptions.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Extensions/AzureBackOfficeAuthenticationOptions.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Extensions/MemberAuthenticationExtensions.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Extensions/IPublishedContentExtensions.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/TagHelpers/ImgSetTagHelper.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Middleware/SecurityHeadersMiddleware.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Middleware/UrlRewriteMiddleware.cs
rm K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/Controllers/ReportingController.cs
rm -r K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/App_Plugins/my-auth-providers/
```

Note: the build will not succeed until Task B4 updates `Program.cs` references.

---

### Task B3: Update `_ViewImports.cshtml`

**Files:**
- Modify: `K:\Dev\Sites\AndrewMcLachlan.com\src\AmCom.Web\Views\_ViewImports.cshtml`

- [ ] **Step 1: Replace the tag helper line**

Replace line 12 (`@addTagHelper *, Asm.AmCom.Web`) with:

```razor
@addTagHelper *, Asm.Umbraco
```

The `@using Asm.AmCom.Web` on line 2 stays (other types in that namespace may still be referenced).

---

### Task B4: Update `Program.cs` — machine info and Entra ID registration

**Files:**
- Modify: `K:\Dev\Sites\AndrewMcLachlan.com\src\AmCom.Web\Program.cs`

- [ ] **Step 1: Update imports at the top of the file**

Replace the existing `using` lines with:

```csharp
using System.Net;
using Asm.AspNetCore.Middleware;
using Asm.AspNetCore.Reporting;
using Asm.Umbraco.MachineInfo;
using Asm.Umbraco.Authentication.EntraId;
using Azure.Identity;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.StaticFiles;
```

(Removed: `Asm.AmCom.Web.Middleware`, `Umbraco.Cms.Core.Factories`. Added: the four new library namespaces.)

- [ ] **Step 2: Replace the machine-info registration**

Find this line:

```csharp
services.AddUnique<IMachineInfoFactory, Asm.AmCom.Web.Config.FixedMachineInfoFactory>();
```

Replace with (before `umbracoBuilder.Build()`):

```csharp
umbracoBuilder.AddFixedMachineInfoFactory(opts => opts.MachineName = "amcom");
umbracoBuilder.AddEntraIdAuthentication(builder.Configuration.GetSection("Azure"));
```

The existing `"Azure"` config section is reused (no `appsettings.json` change).

- [ ] **Step 3: Register security reporting**

Still before `umbracoBuilder.Build()`, add:

```csharp
services.AddSecurityReporting(opts => opts.RoutePrefix = "api/reporting");
```

---

### Task B5: Update `Program.cs` — pipeline middleware

**Files:**
- Modify: `K:\Dev\Sites\AndrewMcLachlan.com\src\AmCom.Web\Program.cs`

- [ ] **Step 1: Replace `UseUrlRewrite()`**

Find:

```csharp
app.UseUrlRewrite();
```

Replace with:

```csharp
app.UseCanonicalUrls(opts =>
{
    opts.ExemptPathPrefixes = ["/umbraco", "/install"];
});
```

- [ ] **Step 2: Replace `UseCustomSecurityHeaders()`**

Find:

```csharp
app.UseCustomSecurityHeaders();
```

Replace with (the full header dictionary is AmCom's existing policy, copied verbatim from `src/AmCom.Web/Middleware/SecurityHeadersMiddleware.cs`):

```csharp
app.UseSecurityHeaders(opts =>
{
    opts.ExemptPathPrefixes = ["/umbraco", "/install"];
    opts.Headers = new Dictionary<string, string>
    {
        ["Content-Security-Policy"] = "default-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; report-to csp-endpoint",
        ["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups",
        ["Cross-Origin-Embedder-Policy"] = "require-corp",
        ["Cross-Origin-Resource-Policy"] = "same-origin",
        ["X-Frame-Options"] = "same-origin",
        ["X-Content-Type-Options"] = "nosniff",
        ["Referrer-Policy"] = "strict-origin-when-cross-origin",
        ["Permissions-Policy"] = "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()"
    };
});
```

The `Reporting-Endpoints` and `Report-To` headers are added automatically by the middleware because `SecurityReportingOptions` is registered.

- [ ] **Step 3: Map the security-reporting endpoints**

Find the `app.UseUmbraco()` block. Before it (after `app.UseStatusCodePagesWithReExecute(...)` — but routing must be active; minimal APIs work without explicit `app.UseRouting()` in ASP.NET Core 10), add:

```csharp
app.MapSecurityReporting();
```

The prefix is `api/reporting` (set in Task B4 Step 3) so endpoints are `POST /api/reporting/integrity` and `POST /api/reporting/csp` — identical to the controller they replace.

---

### Task B6: Build and smoke test

**Files:**
- N/A (verification only)

- [ ] **Step 1: Build AmCom.Web**

```
dotnet build K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/AmCom.Web.csproj
```
Expected: `Build succeeded. 0 Error(s)`. Warnings from Razor compilation are acceptable if pre-existing.

- [ ] **Step 2: Run locally**

```
dotnet run --project K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/AmCom.Web.csproj
```

- [ ] **Step 3: Smoke test — public site**

- Visit `/` in a browser. Expect the home page renders, photography hero shows.
- Visit an upper-case URL like `/About`. Expect 301 to `/about`.
- Visit a URL with trailing slash like `/about/`. Expect 301 to `/about`.
- Visit `/about.pdf`-style asset (if any exists). Expect no redirect.
- Open browser devtools → Network → select the HTML request. Expect these response headers:
  - `Content-Security-Policy`, `Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`, `Cross-Origin-Resource-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
  - `Reporting-Endpoints` — contains `integrity-endpoint=` and `csp-endpoint=` pointing at `/api/reporting/...`.
  - `Report-To` — contains the two groups with the same URLs.
  - No `Server`, `X-Powered-By` headers.

- [ ] **Step 4: Smoke test — back-office login**

- Visit `/umbraco`. Expect the login screen to render.
- Expect a "Sign in with Microsoft" button. This confirms `EntraIdManifestReader` is wiring the SPA correctly.
- Click it; expect redirect to `login.microsoftonline.com/<tenant>/oauth2/v2.0/authorize...`.
- Complete the flow; expect to land back in the Umbraco back office signed in.
- Check that `/umbraco` path did not canonicalise/redirect (exempt paths work).

- [ ] **Step 5: Smoke test — reporting endpoints**

```
curl -X POST http://localhost:5000/api/reporting/csp -H "Content-Type: application/json" -d '{"test":"body"}' -i
```
Expected: HTTP/1.1 204 No Content. Check `logs/` for a warning-level entry with body `{"test":"body"}` under category `Asm.AspNetCore.Reporting.Csp`.

```
curl -X POST http://localhost:5000/api/reporting/integrity -H "Content-Type: application/json" -d '{"test":"body"}' -i
```
Expected: HTTP/1.1 204 No Content; warning logged under `Asm.AspNetCore.Reporting.Integrity`.

- [ ] **Step 6: Stop the app**

Ctrl+C.

---

### Task B7: Commit the AmCom migration

- [ ] **Step 1: Review the diff**

```
git -C K:/Dev/Sites/AndrewMcLachlan.com status
git -C K:/Dev/Sites/AndrewMcLachlan.com diff --stat
```

- [ ] **Step 2: Stage the migration-specific files**

```
git -C K:/Dev/Sites/AndrewMcLachlan.com add \
  src/AmCom.Web/AmCom.Web.csproj \
  src/AmCom.Web/Program.cs \
  src/AmCom.Web/Views/_ViewImports.cshtml \
  src/AmCom.Web/Config/ \
  src/AmCom.Web/Extensions/ \
  src/AmCom.Web/TagHelpers/ \
  src/AmCom.Web/Middleware/ \
  src/AmCom.Web/Controllers/ \
  src/AmCom.Web/App_Plugins/
```

(The pre-existing unstaged edits to `blockgrid/items.cshtml`, `blocklist/default.cshtml`, and `site.min.css.map` are intentionally **not** staged — they belong to separate in-progress work.)

- [ ] **Step 3: Commit**

```
git -C K:/Dev/Sites/AndrewMcLachlan.com commit -m "Migrate AmCom to Asm.Umbraco, Asm.Umbraco.Authentication, and Asm.AspNetCore packages"
```

---

## Verification summary

End-to-end the plan is verified by:

1. `dotnet build K:/Dev/Libraries/Asm/Asm.slnx` — clean build of the three modified library projects.
2. `dotnet build K:/Dev/Sites/AndrewMcLachlan.com/src/AmCom.Web/AmCom.Web.csproj` — clean build of the consumer.
3. Manual smoke test per Task B6 covers: canonical URL redirects, static + reporting security headers, back-office login button rendering (proves `IPackageManifestReader`), back-office Entra ID sign-in round-trip, reporting endpoints returning 204 and logging.

If any step fails, stop and ask rather than pressing on. The most likely snag is `PackageManifest`'s namespace or property shape in Umbraco 17.3.4 (Task A14) — inspect the installed `Umbraco.Cms.Core.dll` or Umbraco source if the types don't resolve.

## Deviation from spec

The spec's AmCom migration examples used `opts with { ... }` syntax, which implies `init`-only record properties. The plan uses `{ get; set; }` record properties with in-place assignment (`opts.X = ...`) instead. Reason: `Action<TOptions>` — the idiomatic ASP.NET Core options pattern, preserved from the spec — requires mutable properties, and `init` setters are not mutable post-construction. Records with `{ get; set; }` are still records (value equality, positional deconstruction, `with` expression support) — only the setter accessibility changes. All options records in the plan are consistent on this.
