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
    [ApiController]
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
        public ActionResult<RegexTestResponse> Test([FromBody]RegexTestRequest request)
        {
            if (request == null) return StatusCode(400, "Request body missing or not valid");
            if (String.IsNullOrWhiteSpace(request.Regex)) return StatusCode(400, "Regex must be supplied");

            Regex reg;

            try
            {
                reg = new Regex(request.Regex);
            }
            catch (ArgumentException)
            {
                return StatusCode(400, "Not a valid Regex");
            }

            Match match = reg.Match(request.Text);

            return new RegexTestResponse(match);
        }
    }
}