using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asm.AmCom.Web.Controllers
{
    public class AboutController : Controller
    {
        private IConfiguration _configuration;

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
}
