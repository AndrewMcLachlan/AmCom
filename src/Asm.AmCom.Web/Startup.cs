using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Asm.AmCom.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            services.AddHsts(o => o.MaxAge = new TimeSpan(0, 0, 31536000));
            services.AddMemoryCache();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
            services.AddTransient<ViewHelper>();
            services.AddTransient<ThemeHelper>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment() || (Boolean.TryParse(Configuration["CustomErrorPages"], out bool test) && !test))
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error/error/500");
            }

            app.UseStatusCodePagesWithReExecute("/error/error/{0}");

            app.UseStaticFiles();

            using (StreamReader iisUrlRewriteConfig = File.OpenText("rewrite.config"))
            {
                var options = new RewriteOptions()
                    .AddIISUrlRewrite(iisUrlRewriteConfig);

                app.UseRewriter(options);
            }

            app.UseHttpsRedirection();
            app.UseHsts();

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
        }
    }
}
