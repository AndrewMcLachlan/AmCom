using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Controllers
{
    public class AboutController : Controller
    {
        [Route("about-me")]
        public ActionResult Index()
        {
            return View("Index");
        }

        /*[ActionName(".*")]
        public ActionResult Generic()
        {
            return View();
        }*/
    }
}
