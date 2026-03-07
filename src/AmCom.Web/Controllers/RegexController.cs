using Asm.AmCom.Web.Models;
using Asm.AmCom.Web.Mvc;
using System.Text.RegularExpressions;

namespace Asm.AmCom.Web.Controllers;

[Area("Tools")]
[Route("tools")]
[ApiController]
public class RegexController : Controller
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
            reg = new Regex(request.Regex, RegexOptions.None, TimeSpan.FromSeconds(2));
        }
        catch (ArgumentException)
        {
            return BadRequest(KnownProblemDetails.RegexTester.InvalidRegex);
        }

        Match match = reg.Match(request.Text ?? String.Empty);

        return Ok(new RegexTestResponse(match));
    }
}
