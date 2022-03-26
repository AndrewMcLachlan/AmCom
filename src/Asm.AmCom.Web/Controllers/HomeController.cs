using Asm.AmCom.Extensions;
using Asm.AmCom.Web.Models;

namespace Asm.AmCom.Web.Controllers;

public class HomeController : Controller
{
    [Route("")]
    public IActionResult Index()
    {
        HomeModel model = new HomeModel();

        Random random = new Random(Guid.NewGuid().GetHashCode());
        int randomRes = random.Next(1, 4);
        switch (randomRes)
        {
           /* case 2:
                model.Hero = "Paris";
                break;
            case 3:
                model.Hero = "Cotswolds";
                break;*/
            case 1:
            default:
                model.Hero = "Egypt";
                break;
        }

        return View(model);
    }

    [Route("privacy-and-cookies")]
    public ActionResult Privacy()
    {
        return View();
    }

    [Route("accept-cookies")]
    public IActionResult AcceptCookies()
    {
        CookieHelper.AcceptCookies(HttpContext);

        if (Request.UrlReferrer() != null)
        {
            return Redirect(Request.UrlReferrer());
        }
        else
        {
            return RedirectToAction("Index");
        }
    }
}
