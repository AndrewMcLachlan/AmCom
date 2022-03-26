namespace Asm.AmCom.Web.Controllers;

public class AboutController : Controller
{
    private readonly IConfiguration _configuration;

    public AboutController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [Route("about-me")]
    public ActionResult Index()
    {
        return View("Index");
    }

    [Route("resume")]
    public async Task<ActionResult> Resume()
    {
        HttpClient client = new HttpClient();

        Stream stream = await client.GetStreamAsync(_configuration["Resume"]);

        return new FileStreamResult(stream, "application/pdf");
    }
}
