using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.AspNetCore.Routing;

namespace Asm.AmCom.Web
{
    /// <summary>
    /// Helper class for views.
    /// </summary>
    public class ViewHelper
    {
        private IWebHostEnvironment _environment;
        private ICompositeViewEngine _viewEngine;
        private IHttpContextFactory _httpContextFactory;

        public IUrlHelper UrlHelper { get; private set; }
        public ActionContext Context { get; private set; }

        public ViewHelper(IActionContextAccessor contextAccessor, IWebHostEnvironment environment, ICompositeViewEngine viewEngine, IUrlHelperFactory urlHelperFactory, IHttpContextFactory httpContextFactory)
        {
            Context = contextAccessor.ActionContext;
            _environment = environment;
            _viewEngine = viewEngine;
            _httpContextFactory = httpContextFactory;
            UrlHelper = urlHelperFactory.GetUrlHelper(Context);
        }

        /// <summary>
        /// Gets the physical location of a view layout from the URL.
        /// </summary>
        /// <param name="url">The URL.</param>
        /// <returns>The physical path to the view for the URL, otherwise <c>null</c>.</returns>
        public string GetPhysicalPath(string controller, string action, string area = null)
        {
            var request = Context.HttpContext.Request;

            var viewName = Context.ActionDescriptor.DisplayName;

            var routeData = new RouteData();
            routeData.Values["controller"] = controller;
            routeData.Values["action"] = action;
            if (area != null)
            {
                routeData.Values["area"] = area;
            }


            IFeatureCollection featureCollection = new FeatureCollection();
            featureCollection.Set<IHttpRequestFeature>(new HttpRequestFeature());
            featureCollection.Set<IHttpResponseFeature>(new HttpResponseFeature());
            featureCollection.Set<IRoutingFeature>(new RoutingFeature() { RouteData = routeData });

            var context = _httpContextFactory.Create(featureCollection);

            ActionContext ac = new ActionContext(context, context.GetRouteData(), new ControllerActionDescriptor());
            ControllerContext cc = new ControllerContext(ac);

            IView view = _viewEngine.FindView(cc, cc.RouteData.Values["action"].ToString(), true).View;

            if (view == null) return null;

            return Path.Combine(_environment.ContentRootPath, view.Path.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));
        }

        public async Task<string> GetPhysicalPath(string url)
        {
            var request = Context.HttpContext.Request;

            var viewName = Context.ActionDescriptor.DisplayName;

            IFeatureCollection featureCollection = new FeatureCollection();
            featureCollection.Set<IHttpRequestFeature>(new HttpRequestFeature());
            featureCollection.Set<IHttpResponseFeature>(new HttpResponseFeature());
            featureCollection.Set<IRoutingFeature>(new RoutingFeature());

            var context = _httpContextFactory.Create(featureCollection);

            RouteContext routeContext = new RouteContext(context);

            featureCollection.Get<IRoutingFeature>().RouteData = routeContext.RouteData;

            await Context.HttpContext.GetRouteData().Routers[0].RouteAsync(routeContext);

            ActionContext ac = new ActionContext(context, routeContext.RouteData, new ControllerActionDescriptor());
            ControllerContext cc = new ControllerContext(ac);

            IView view = _viewEngine.FindView(cc, cc.RouteData.Values["action"].ToString(), true).View;

            if (view == null) return null;

            return  Path.Combine(_environment.ContentRootPath, view.Path.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));
        }
    }
}
