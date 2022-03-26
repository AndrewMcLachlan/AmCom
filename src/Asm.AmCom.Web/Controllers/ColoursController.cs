namespace Asm.AmCom.Web.Controllers;

[Route("[controller]")]
public class ColoursController : Controller
{
    [Route("")]
    public IActionResult Index()
    {
        return View();
    }
}
