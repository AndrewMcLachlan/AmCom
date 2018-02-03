using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Asm.AmCom.Web.Controllers
{
    [Route("[controller]")]
    public class ColoursController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
