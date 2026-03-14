using System.Net;
using Asm.AmCom.Web.Middleware;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.StaticFiles;
using IPNetwork = System.Net.IPNetwork;

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

    services.AddHsts(o => o.MaxAge = new TimeSpan(0, 0, 31536000));
    services.AddMemoryCache();
    services.AddHttpContextAccessor();

    umbracoBuilder.AddAzureBlobMediaFileSystem();

    if (builder.Environment.IsDevelopment())
    {
        services.AddControllersWithViews().AddRazorRuntimeCompilation();
    }

    umbracoBuilder.Build();

    WebApplication app = builder.Build();

    await app.BootUmbracoAsync();

    app.Use(async (context, next) =>
    {
        Console.WriteLine($"RemoteIP: {context.Connection.RemoteIpAddress}");
        Console.WriteLine($"X-Forwarded-For: {context.Request.Headers["X-Forwarded-For"]}");
        Console.WriteLine($"X-Forwarded-Proto: {context.Request.Headers["X-Forwarded-Proto"]}");
        Console.WriteLine($"X-Original-Proto: {context.Request.Headers["X-Original-Proto"]}");
        Console.WriteLine($"Scheme before: {context.Request.Scheme}");
        await next();
        Console.WriteLine($"Scheme after: {context.Request.Scheme}");
    });

    var forwardedHeadersOptions = new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto,
    };
    forwardedHeadersOptions.KnownIPNetworks.Add(new IPNetwork(IPAddress.Parse("::ffff:10.0.0.0"), 104));
    forwardedHeadersOptions.KnownIPNetworks.Add(new IPNetwork(IPAddress.Parse("::ffff:172.16.0.0"), 108));
    forwardedHeadersOptions.KnownIPNetworks.Add(new IPNetwork(IPAddress.Parse("::ffff:192.168.0.0"), 112));
    app.UseForwardedHeaders(forwardedHeadersOptions);

    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseHttpsRedirection();
        app.UseExceptionHandler("/error/error/500");
        app.UseHsts();
    }

    //app.UseUrlRewrite();

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

