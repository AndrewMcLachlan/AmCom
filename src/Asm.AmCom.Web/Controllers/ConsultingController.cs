using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Asm.AmCom.Web.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Controllers
{
    public class ConsultingController : Controller
    {
        [RewriteAction("anyaction")]
        public ActionResult Generic()
        {
            return View();
        }
    }
}