namespace Asm.AmCom.Web.Controllers;

[Area("API")]
[Route("api")]
[ApiController]
public class ReportingController(ILogger<ReportingController> logger) : Controller
{
    [HttpPost("reporting/integrity")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public async Task ReportIntegrity()
    {
        using var reader = new StreamReader(Request.Body);
        var body = await reader.ReadToEndAsync();
        logger.LogWarning("Integrity Report ({ContentType}): {Report}", Request.ContentType, body);
    }

    [HttpPost("reporting/csp")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public async Task ReportCsp()
    {
        using var reader = new StreamReader(Request.Body);
        var body = await reader.ReadToEndAsync();
        logger.LogWarning("CSP Report ({ContentType}): {Report}", Request.ContentType, body);
    }
}
