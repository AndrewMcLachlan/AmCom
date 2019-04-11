using System.Linq;
using Asm.Extensions;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Asm.AmCom.Web.TagHelpers
{
    public class BodyTagHelper : TagHelper
    {
        [ViewContext]
        public ViewContext ViewContext { get; set; }

        private ThemeHelper ThemeHelper {get;}

        public BodyTagHelper(ThemeHelper themeHelper) : base()
        {
            ThemeHelper = themeHelper;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            string className = ThemeHelper.CurrentTheme;

            string area = ViewContext.RouteData.Values["area"] as string;
            string controller = ViewContext.RouteData.Values["controller"] as string;
            string action = ViewContext.RouteData.Values["action"] as string;

            className = className.Append($"{area} {controller} {action}", " ").ToLowerInvariant();

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
