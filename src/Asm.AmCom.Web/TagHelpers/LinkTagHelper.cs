using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Asm.AmCom.Web.TagHelpers
{
    public class LinkTagHelper : TagHelper
    {
        [ViewContext]
        public ViewContext ViewContext { get; set; }

        private IUrlHelper _urlHelper;
        private IHostingEnvironment _hostingEnvironment;

        public LinkTagHelper(IActionContextAccessor actionContextAccessor, IUrlHelperFactory urlHelperFactory,IHostingEnvironment hostingEnvironment)
        {
            _urlHelper = urlHelperFactory.GetUrlHelper(actionContextAccessor.ActionContext);
            _hostingEnvironment = hostingEnvironment;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (context.AllAttributes["integrity"] != null || context.AllAttributes["rel"] == null || ((HtmlString)context.AllAttributes["rel"].Value).Value != "stylesheet") return;

            var href = context.AllAttributes["href"]?.Value as HtmlString;

            string cleanPath = href.Value.Replace('~', '.');
            cleanPath = cleanPath.Substring(0, cleanPath.IndexOf("?") > 0 ? cleanPath.IndexOf("?") : cleanPath.Length);
            cleanPath = cleanPath.Replace('/', Path.DirectorySeparatorChar);

            string path = Path.Combine(_hostingEnvironment.WebRootPath, cleanPath);

            var hashAlgo = System.Security.Cryptography.HashAlgorithm.Create("SHA-256");

            byte[] hash = hashAlgo.ComputeHash(File.OpenRead(path));

            string hashBase64 = Convert.ToBase64String(hash);

            output.Attributes.RemoveAll("href");
            output.Attributes.Add("href", _urlHelper.Content(href.Value.Replace("$v", Math.Abs(hashBase64.GetHashCode()).ToString())));

            output.Attributes.Add("integrity", "sha256-" + hashBase64);
        }
    }
}
