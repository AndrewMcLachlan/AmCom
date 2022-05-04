using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Asm.AmCom.Web.TagHelpers;

public class ThemeTagHelper : TagHelper
{
    [ViewContext]
    public ViewContext ViewContext { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "a";
        output.TagMode = TagMode.StartTagAndEndTag;

        output.Attributes.Add("class", "theme-switch");
        output.Attributes.Add("href", "#theme");

        output.Content.SetHtmlContent(new HtmlString($"<span class=\"theme-text\"></span> Theme"));
    }
}
