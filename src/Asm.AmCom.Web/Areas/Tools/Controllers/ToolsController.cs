using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Mvc.Areas.Tools.Controllers
{
    [Area("Tools")]
    [Route("tools")]
    public class ToolsController : Controller
    {
        [Route("base64")]
        public ActionResult Base64()
        {
            return View();
        }
    }
}