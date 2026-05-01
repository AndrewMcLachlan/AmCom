using System.Net;
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
    services.AddStandardSecurityHeaders().AddContentSecurityPolicy(options =>
    {
        options.AddDefaultSrc().Self();
        options.AddConnectSrc().Self();
        options.AddImgSrc().Self().From("https://cdn.andrewmclachlan.com");
        options.AddStyleSrc().Self().UnsafeInline();
        options.AddScriptSrc().Self();
        options.AddFontSrc().Self().From("https://cdn.andrewmclachlan.com");
    })
    .AddPermissionsPolicyWithDefaultSecureDirectives();

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


    app.UseStandardSecurityHeaders("/umbraco", "/install", "/media");

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
