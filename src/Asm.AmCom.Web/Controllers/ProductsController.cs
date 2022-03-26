using Asm.AmCom.Web.Mvc;

namespace Asm.AmCom.Web.Controllers;

public class ProductsController : Controller
{
    [ActionName("octopus-notify")]
    public IActionResult OctopusNotify()
    {
        return View("OctopusNotify");
    }

    [ActionName("project-portal")]
    public IActionResult ProjectPortal()
    {
        return View("ProjectPortal");
    }

    [ActionName("carbs-and-cals")]
    public IActionResult CarbsAndCals()
    {
        return View("CarbsAndCals");
    }

    [RewriteAction("anyaction")]
    public IActionResult Generic()
    {
        return View();
    }
}
