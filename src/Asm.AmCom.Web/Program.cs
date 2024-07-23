using Asm.AmCom.Web;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.StaticFiles;

try
{

    WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

    var umbracoBuilder = builder.CreateUmbracoBuilder()
        .AddBackOffice()
        .AddWebsite()
        .AddDeliveryApi()
        .AddComposers();

    var services = builder.Services;

    services.AddHsts(o => o.MaxAge = new TimeSpan(0, 0, 31536000));
    services.AddMemoryCache();
    services.AddHttpContextAccessor();
    services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
    services.AddTransient<ViewHelper>();

    if (!builder.Environment.IsDevelopment())
    {
        umbracoBuilder.AddAzureBlobMediaFileSystem();
    }

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
            u.UseInstallerEndpoints();
            u.UseBackOfficeEndpoints();
            u.UseWebsiteEndpoints();
        });


    await app.RunAsync();
}
catch (Exception ex)
{
    Console.WriteLine(ex);
}

/*public static void Main(string[] args)
    => CreateHostBuilder(args)
        .Build()
        .Run();

public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureUmbracoDefaults()
        .ConfigureLogging(x => x.ClearProviders())
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStaticWebAssets();
            webBuilder.UseStartup<Startup>();
        });*/
