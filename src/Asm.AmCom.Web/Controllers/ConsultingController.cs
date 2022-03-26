using Asm.AmCom.Web.Mvc;

namespace Asm.AmCom.Web.Controllers;

public class ConsultingController : Controller
{
    [RewriteAction("anyaction")]
    public ActionResult Generic()
    {
        return View();
    }
}
