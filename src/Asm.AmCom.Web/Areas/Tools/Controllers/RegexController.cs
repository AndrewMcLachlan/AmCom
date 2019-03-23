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
        public IActionResult Test([FromBody]RegexTestRequest request)
        {
            if (request == null) return BadRequest(KnownProblemDetails.RegexTester.NullRequest);
            if (String.IsNullOrWhiteSpace(request.Regex)) return BadRequest(KnownProblemDetails.RegexTester.EmptyRegex);

            Regex reg;

            try
            {
                reg = new Regex(request.Regex);
            }
            catch (ArgumentException)
            {
                return BadRequest(KnownProblemDetails.RegexTester.InvalidRegex);
            }

            Match match = reg.Match(request.Text ?? String.Empty);

            return Ok(new RegexTestResponse(match));
        }
    }
}