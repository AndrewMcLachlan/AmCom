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
using Microsoft.Extensions.Caching.Memory;

namespace Asm.AmCom.Web.TagHelpers
{
    public class LinkTagHelper : IntegrityTagHelper
    {
        protected override string UrlAttributeName => "href";

        public LinkTagHelper(IActionContextAccessor actionContextAccessor, IUrlHelperFactory urlHelperFactory,IHostingEnvironment hostingEnvironment, IMemoryCache memoryCache) : base (actionContextAccessor, urlHelperFactory, hostingEnvironment, memoryCache)
        {
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (context.AllAttributes["integrity"] != null || context.AllAttributes["rel"] == null || ((HtmlString)context.AllAttributes["rel"].Value).Value != "stylesheet") return;

            base.Process(context, output);

        }
    }
}
