using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Asm.AmCom.Web.TagHelpers
{
    public class BodyTagHelper : TagHelper
    {
        [ViewContext]
        public ViewContext ViewContext { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            string area = ViewContext.RouteData.Values["area"] as string;
            string controller = ViewContext.RouteData.Values["controller"] as string;
            string action = ViewContext.RouteData.Values["action"] as string;

            string className = ($"{area} {controller} {action}").Trim().ToLowerInvariant();

            output.TagName = "body";

            if (output.Attributes.Any(a => a.Name == "class"))
            {
                className += " " + output.Attributes["class"].Value;
                output.Attributes.Remove(output.Attributes["class"]);
            }

            output.Attributes.Add(new TagHelperAttribute("class", className));
        }
    }
}
