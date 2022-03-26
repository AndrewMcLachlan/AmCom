namespace Asm.AmCom.Web.Areas.Tools.Controllers;

[Area("Tools")]
[Route("tools")]
public class ToolsController : Controller
{
    [Route("base64")]
    public ActionResult Base64()
    {
        return View();
    }

    [Route("ip")]
    public ActionResult IP()
    {
        return View();
    }

}
