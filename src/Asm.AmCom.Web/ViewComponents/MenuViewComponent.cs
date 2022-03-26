using Asm.AmCom.Web.Models;
using Asm.AmCom.Web.Sitemap;

namespace Asm.AmCom.Web.ViewComponents;

public class MenuViewComponent : ViewComponent
{
    private readonly IWebHostEnvironment _env;

    public MenuViewComponent(IWebHostEnvironment env) : base()
    {
        _env = env;
    }

    public Task<IViewComponentResult> InvokeAsync(string siteMapName = "Web.sitemap", int level = 1, string liClass = "", string aClass = null)
    {
        var siteMapPath = Path.Combine(_env.ContentRootPath, siteMapName);

        SiteMapNode currentNode = new SiteMapNode
        {
            Area = ViewContext.RouteData.Values["Area"] as string,
            Controller = ViewContext.RouteData.Values["Controller"] as string,
            Action = ViewContext.RouteData.Values["Action"] as string,
        };


        MenuModel model = new MenuModel(siteMapPath, level, currentNode);
        model.ListItemClass = liClass;
        model.AnchorClass = aClass;
        return Task.FromResult(View("Menu", model) as IViewComponentResult);
    }
}
