using Asm.AmCom.Web;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Logging.AzureAppServices;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Logging.AddAzureWebAppDiagnostics().AddConfiguration(builder.Configuration.GetSection("Logging")).AddConsole().AddDebug();

builder.Services.Configure<AzureFileLoggerOptions>(options =>
{
    options.FileName = "azure-diagnostics-";
    options.FileSizeLimit = 50 * 1024;
    options.RetainedFileCountLimit = 5;
}).Configure<AzureBlobLoggerOptions>(options =>
{
    options.BlobName = "log.txt";
});

builder.Services.AddHsts(o => o.MaxAge = new TimeSpan(0, 0, 31536000));
builder.Services.AddMemoryCache();
builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
builder.Services.AddTransient<ViewHelper>();
builder.Services.AddTransient<ThemeHelper>();

var app = builder.Build();

if (app.Environment.IsDevelopment() || builder.Configuration.GetValue<bool>("CustomErrorPages", true))
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseHttpsRedirection();
    app.UseExceptionHandler("/error/error/500");
}

app.UseStatusCodePagesWithReExecute("/error/error/{0}");

app.UseStaticFiles();

using (StreamReader iisUrlRewriteConfig = File.OpenText("rewrite.config"))
{
    var options = new RewriteOptions()
        .AddIISUrlRewrite(iisUrlRewriteConfig);

    app.UseRewriter(options);
}

app.UseHsts();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute("productDefault", "products", new { controller = "products", action = "octopus-notify" });

    endpoints.MapControllerRoute(
        name: "consulting",
        pattern: "Consulting/{anyaction}",
        defaults: new { Controller = "Consulting", Action = "Generic", AnyAction = "Index" });

    endpoints.MapControllerRoute(
        name: "areas",
        pattern: "{area:exists}/{controller=Regex}/{action=Index}");

    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");

    endpoints.MapControllerRoute(
        name: "productsGeneric",
        pattern: "products/{anyaction}",
        defaults: new { Controller = "Products", Action = "Generic", AnyAction = "Index" });
});

app.Run();