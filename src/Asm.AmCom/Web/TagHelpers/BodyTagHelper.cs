using Asm.Extensions;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Asm.AmCom.Web.TagHelpers;

public class BodyTagHelper : TagHelper
{
    private string @class;

    public string Class
    {
        get
        {
            return @class ?? String.Empty;
        }
        set
        {
            @class = Normalise(value);
        }
    }

    [ViewContext]
    public ViewContext ViewContext { get; set; }

    private ThemeHelper ThemeHelper { get; }

    public BodyTagHelper(ThemeHelper themeHelper) : base()
    {
        ThemeHelper = themeHelper;
    }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        string className = Class.Append(ThemeHelper.CurrentTheme, " ");

        output.TagName = "body";

        if (output.Attributes.Any(a => a.Name == "class"))
        {
            className += " " + Normalise(output.Attributes["class"].Value);
            output.Attributes.Remove(output.Attributes["class"]);
        }

        output.Attributes.Add(new TagHelperAttribute("class", className));
    }

    private static string Normalise(object className) => className?.ToString().ToLower().Replace(' ', '-');
}
