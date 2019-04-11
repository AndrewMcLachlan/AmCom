using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Asm.AmCom.Web.TagHelpers
{
    public class ThemeTagHelper : TagHelper
    {
        [ViewContext]
        public ViewContext ViewContext { get; set; }

        private ThemeHelper ThemeHelper { get; }

        public ThemeTagHelper(ThemeHelper themeHelper) : base()
        {
            ThemeHelper = themeHelper;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "a";
            output.TagMode = TagMode.StartTagAndEndTag;

            output.Attributes.Add("class", "theme-switch");
            output.Attributes.Add("href", "#theme");

            output.Content.SetHtmlContent(new HtmlString($"{ThemeHelper.OtherTheme} Theme"));
        }
    }
}
