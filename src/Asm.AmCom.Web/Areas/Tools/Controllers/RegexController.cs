using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using Asm.AmCom.Web.Areas.Tools.Models;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Mvc.Areas.Tools.Controllers
{
    [Area("Tools")]
    [Route("tools")]
    public class RegexController : Controller
    {
        [Route("")]
        [Route("regex")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("api/regex")]
        [HttpPost]
        public RegexTestResponse Test([FromBody]RegexTestRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            Regex reg = new Regex(request.Regex);

            Match match = reg.Match(request.Text);

            return new RegexTestResponse { Success = match.Success };
        }
    }
}