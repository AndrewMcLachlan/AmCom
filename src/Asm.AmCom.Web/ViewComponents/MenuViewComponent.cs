using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Asm.AmCom.Web.Models;
using Asm.AmCom.Web.Sitemap;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;

namespace Asm.AmCom.Web.ViewComponents
{
    public class MenuViewComponent : ViewComponent
    {
        private IUrlHelperFactory _urlHelperFactory;
        private IHostingEnvironment _env;

        public MenuViewComponent(IUrlHelperFactory urlHelperFactory, IHostingEnvironment env) : base()
        {
            _urlHelperFactory = urlHelperFactory;
            _env = env;
        }

        public Task<IViewComponentResult> InvokeAsync(string siteMapName = "Web.sitemap", int level = 1)
        {
            IUrlHelper urlHelper = _urlHelperFactory.GetUrlHelper(ViewContext);

            var siteMapPath = Path.Combine(_env.ContentRootPath, siteMapName);

            SiteMapNode currentNode = new SiteMapNode
            {
                Area = ViewContext.RouteData.Values["Area"] as string,
                Controller = ViewContext.RouteData.Values["Controller"] as string,
                Action = ViewContext.RouteData.Values["Action"] as string,
            };


            MenuModel model = new MenuModel(siteMapPath, level, currentNode);
            return Task.FromResult(View("Menu", model) as IViewComponentResult);
        }
    }
}
