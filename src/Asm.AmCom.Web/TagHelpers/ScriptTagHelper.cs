using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public ScriptTagHelper(IActionContextAccessor actionContextAccessor, IUrlHelperFactory urlHelperFactory)
        {
            _urlHelper = urlHelperFactory.GetUrlHelper(actionContextAccessor.ActionContext);
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            // Not a script with src-min
            if (!context.AllAttributes.Any(a => a.Name == "src-min")) return;

            output.TagName = "script";
#if DEBUG
            var src = context.AllAttributes["src"]?.Value as HtmlString;
#else
            var src = (context.AllAttributes["src-min"]?.Value ?? context.AllAttributes["src"]?.Value) as HtmlString;
#endif

            output.Attributes.RemoveAll("src-min");
            output.Attributes.RemoveAll("src");

            output.Attributes.Add(new TagHelperAttribute("src", _urlHelper.Content(src.Value)));
        }
    }
}
