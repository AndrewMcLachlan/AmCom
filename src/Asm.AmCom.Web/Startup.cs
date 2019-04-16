using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;

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
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddMemoryCache();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
            services.AddTransient<ViewHelper>();
            services.AddTransient<ThemeHelper>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment() || (Boolean.TryParse(Configuration["CustomErrorPages"], out bool test) && !test))
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Error/error/500");
            }

            app.UseStatusCodePagesWithReExecute("/error/error/{0}");

            app.UseStaticFiles();

            /*using (StreamReader iisUrlRewriteConfig = File.OpenText("rewrite.config"))
            {
                var options = new RewriteOptions()
                    .AddIISUrlRewrite(iisUrlRewriteConfig);

                app.UseRewriter(options);
            }*/

            app.UseMvc(routes =>
            {
                routes.MapRoute("productDefault", "products", new { controller = "products", action = "octopus-notify" });

                routes.MapRoute(
                    name: "consulting",
                    template: "Consulting/{anyaction}",
                    defaults: new { Controller = "Consulting", Action = "Generic", AnyAction = "Index" });

                routes.MapRoute(
                    name: "areas",
                    template: "{area:exists}/{controller=Regex}/{action=Index}");

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "productsGeneric",
                    template: "products/{anyaction}",
                    defaults: new { Controller = "Products", Action = "Generic", AnyAction = "Index" });
            });
        }
    }
}
