using System.Text.RegularExpressions;
using Asm.AmCom.Web.Models;
using Asm.AmCom.Web.Mvc;
using Umbraco.Cms.Web.Common.Controllers;

namespace Asm.AmCom.Web.Controllers;

[Area("Tools")]
[Route("tools")]
[ApiController]
public class RegexController : UmbracoApiController
{
    [Route("api/regex")]
    [HttpPost]
    public IActionResult Test([FromBody] RegexTestRequest request)
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
