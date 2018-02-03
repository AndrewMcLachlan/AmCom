using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Asm.AmCom.Web.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;

namespace Asm.AmCom.Web.Controllers
{
    public class SiteMapController : Controller
    {
        private ViewHelper _viewHelper;
        private IUrlHelperFactory _urlHelperFactory;
        private IHostingEnvironment _env;

        public SiteMapController(ViewHelper viewHelper, IUrlHelperFactory urlHelperFactory, IHostingEnvironment environment)
        {
            _viewHelper = viewHelper;
            _urlHelperFactory = urlHelperFactory;
            _env = environment;
        }

        [Route("site-map")]
        public IActionResult Index()
        {
            return View(new SiteMapModel(_viewHelper, GetSiteMapPath()));
        }

        [Route("sitemap.xml")]
        public IActionResult GoogleSitemap()
        {
            return Content(new SiteMapModel(_viewHelper, GetSiteMapPath()).ToXml(), "text/xml");
        }

        private string GetSiteMapPath()
        {
            IUrlHelper urlHelper = _urlHelperFactory.GetUrlHelper(ControllerContext);

            return Path.Combine(_env.ContentRootPath, "Web.sitemap");
        }
    }
}