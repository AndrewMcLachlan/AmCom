using System.Net;
using Asm.AspNetCore.Middleware;
using Asm.AspNetCore.Reporting;
using Asm.Umbraco.Authentication.EntraId;
using Asm.Umbraco.MachineInfo;
using Azure.Identity;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.StaticFiles;

try
{

    WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

    var umbracoBuilder = builder.CreateUmbracoBuilder()
        .AddBackOffice()
        .AddWebsite()
        .AddDeliveryApi()
        .AddComposers()
        ;

    var services = builder.Services;

    services.AddHsts(o => o.MaxAge = new TimeSpan(365, 0, 0, 0));
    services.AddMemoryCache();
    services.AddHttpContextAccessor();

    var dataProtectionConnectionString = builder.Configuration["DataProtection:StorageConnectionString"];
    if (!String.IsNullOrEmpty(dataProtectionConnectionString))
    {
        services.AddDataProtection()
            .SetApplicationName("AmCom")
            .PersistKeysToAzureBlobStorage(dataProtectionConnectionString, "dataprotection", "amcom-keys.xml")
            .ProtectKeysWithAzureKeyVault(
                new Uri(builder.Configuration["DataProtection:KeyVaultKeyUri"]!),
                new DefaultAzureCredential());
    }

    umbracoBuilder.AddFixedMachineInfoFactory(opts => opts.MachineName = "amcom");
    umbracoBuilder.AddEntraIdAuthentication(builder.Configuration.GetSection("Azure"));
    services.AddSecurityReporting(opts => opts.RoutePrefix = "api/reporting");

    umbracoBuilder.AddAzureBlobMediaFileSystem();

    if (builder.Environment.IsDevelopment())
    {
        // Allows hot reloading of Razor files in development
        services.AddRazorPages().AddRazorRuntimeCompilation();
    }

    umbracoBuilder.Build();

    WebApplication app = builder.Build();

    await app.BootUmbracoAsync();

    var forwardedHeadersOptions = new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto,
        KnownIPNetworks =
        {
            new(IPAddress.Parse("::ffff:10.0.0.0"), 104),
            new(IPAddress.Parse("::ffff:172.16.0.0"), 108),
            new(IPAddress.Parse("::ffff:192.168.0.0"), 112),
            new(IPAddress.Parse("::ffff:169.254.0.0"), 112),
        },
    };

    app.UseForwardedHeaders(forwardedHeadersOptions);

    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/error/error/500");
        app.UseHsts();
    }

    app.UseCanonicalUrls(opts =>
    {
        opts.ExemptPathPrefixes = ["/umbraco", "/install", "/media", "/fonts"];
    });

    app.MapGet("robots.txt", () =>
    @$"User-agent: *
Disallow: {(app.Environment.IsProduction() ? String.Empty : "/")}

Sitemap: https://www.andrewmclachlan.com/sitemap-xml
");

    FileExtensionContentTypeProvider contentTypeProvider = new();

    app.UseStaticFiles(new StaticFileOptions
    {
        HttpsCompression = Microsoft.AspNetCore.Http.Features.HttpsCompressionMode.Compress,
        ContentTypeProvider = contentTypeProvider,
        OnPrepareResponse = (context) =>
        {
            var headers = context.Context.Response.GetTypedHeaders();
            headers.CacheControl = new Microsoft.Net.Http.Headers.CacheControlHeaderValue
            {
                Public = true,
                MaxAge = TimeSpan.FromDays(30)
            };
        }
    });


    app.UseSecurityHeaders(opts =>
    {
        opts.ExemptPathPrefixes = ["/umbraco", "/install", "/media"];
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

    app.UseStatusCodePagesWithReExecute("/error/error/{0}");

    app.MapSecurityReporting();

    app.UseUmbraco()
        .WithMiddleware(u =>
        {
            u.UseBackOffice();
            u.UseWebsite();
        })
        .WithEndpoints(u =>
        {
            u.UseBackOfficeEndpoints();
            u.UseWebsiteEndpoints();
        });


    await app.RunAsync();
    return 0;
}
catch (Exception ex)
{
    Console.WriteLine(ex);
    return -1;
}

