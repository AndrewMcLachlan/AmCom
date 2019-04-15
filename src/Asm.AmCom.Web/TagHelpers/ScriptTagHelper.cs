﻿using System;
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
    public class ScriptTagHelper : TagHelper
    {
        [ViewContext]
        public ViewContext ViewContext { get; set; }

        private IUrlHelper _urlHelper;
        private IHostingEnvironment _hostingEnvironment;

        public ScriptTagHelper(IActionContextAccessor actionContextAccessor, IUrlHelperFactory urlHelperFactory, IHostingEnvironment hostingEnvironment)
        {
            _urlHelper = urlHelperFactory.GetUrlHelper(actionContextAccessor.ActionContext);
            _hostingEnvironment = hostingEnvironment;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
#if DEBUG
            var src = context.AllAttributes["src"]?.Value as HtmlString;
#else
            var src = (context.AllAttributes["src-min"]?.Value ?? context.AllAttributes["src"]?.Value) as HtmlString;
#endif

            if (src == null) return;

            // Not a script with src-min
            if (context.AllAttributes["src-min"] != null)
            {
                output.TagName = "script";

                output.Attributes.RemoveAll("src-min");
                output.Attributes.RemoveAll("src");

                output.Attributes.Add("src", _urlHelper.Content(src.Value));
            }

            if (context.AllAttributes["integrity"] != null) return;

            string path = Path.Combine(_hostingEnvironment.WebRootPath, src.Value.Replace("~", "."));

            var hashAlgo = System.Security.Cryptography.HashAlgorithm.Create("SHA-256");

            byte[] hash = hashAlgo.ComputeHash(File.OpenRead(path));

            output.Attributes.Add("integrity", "sha256-" + Convert.ToBase64String(hash));
        }
    }
}
