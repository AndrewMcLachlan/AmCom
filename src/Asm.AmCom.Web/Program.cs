using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.StaticFiles;
using Umbraco.Cms.Core.Models.Membership;
using Asm.AmCom.Web.Middleware;

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
    services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();

    umbracoBuilder.AddAzureBlobMediaFileSystem();

    umbracoBuilder.Build();

    WebApplication app = builder.Build();

    await app.BootUmbracoAsync();

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

    app.UseCustomSecurityHeaders();
    app.UseUrlRewrite();

    app.MapGet("robots.txt", () =>
    @$"User-agent: *
Disallow: {(app.Environment.IsProduction() ? String.Empty : "/")}

Sitemap: https://www.andrewmclachlan.com/sitemap-xml
");

    FileExtensionContentTypeProvider contentTypeProvider = new();
    contentTypeProvider.Mappings.Add(".avif", "image/avif");
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
}
catch (Exception ex)
{
    Console.WriteLine(ex);
}

