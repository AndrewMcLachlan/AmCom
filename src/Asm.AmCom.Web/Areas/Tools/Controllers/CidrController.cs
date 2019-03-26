using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Areas.Tools.Controllers
{
    [Area("Tools")]
    [Route("tools")]
    [ApiController]
    public class CidrController : Controller
    {
        [Route("cidr")]
        public ActionResult Index()
        {
            return View();
        }
    }
}
