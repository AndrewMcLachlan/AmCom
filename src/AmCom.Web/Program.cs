using System.Net;
using Asm.AmCom.Web.Middleware;
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

    umbracoBuilder.AddAzureBlobMediaFileSystem();

    if (builder.Environment.IsDevelopment())
    {
        services.AddControllersWithViews().AddRazorRuntimeCompilation();
    }

    umbracoBuilder.Build();

    WebApplication app = builder.Build();

    await app.BootUmbracoAsync();

    Console.WriteLine($"TempPath: {Path.GetTempPath()}");
    Console.WriteLine($"TMPDIR: {Environment.GetEnvironmentVariable("TMPDIR")}");

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

    app.UseUrlRewrite();

    // Temporary diagnostic endpoint - REMOVE after debugging
    app.MapGet("/_diag/find-indexes", (Umbraco.Cms.Core.Hosting.IHostingEnvironment umbracoEnv) =>
    {
        var localTempPath = umbracoEnv.LocalTempPath;
        var distCachePath = Path.Combine(localTempPath, "DistCache");
        var examineIndexPath = Path.Combine(localTempPath, "ExamineIndexes");

        return new
        {
            TempPath = Path.GetTempPath(),
            TmpDir = Environment.GetEnvironmentVariable("TMPDIR"),
            UmbracoLocalTempPath = localTempPath,
            app.Environment.ContentRootPath,
            DistCachePath = distCachePath,
            DistCacheExists = Directory.Exists(distCachePath),
            DistCacheFiles = Directory.Exists(distCachePath) ? Directory.GetFiles(distCachePath) : [],
            ExamineIndexPath = examineIndexPath,
            ExamineIndexExists = Directory.Exists(examineIndexPath),
            TmpContents = Directory.Exists("/tmp") ? Directory.GetDirectories("/tmp") : [],
            HomeMountContents = Directory.Exists("/home") ? Directory.GetDirectories("/home") : [],
        };
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


    app.UseCustomSecurityHeaders();

    app.UseStatusCodePagesWithReExecute("/error/error/{0}");

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

