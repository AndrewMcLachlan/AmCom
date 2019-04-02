using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            this.ViewContext.FormContext.
            output.TagName = "script";
#if DEBUG
            object src = context.AllAttributes["src"]?.Value;
#else
            object src = context.AllAttributes["src-min"]?.Value ?? context.AllAttributes["src"]?.Value;
#endif
            output.Attributes.RemoveAll("src-min");

            //output.Attributes["src"].Value = new Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper.EncodeFirstSegmentContent
         //       .Add(new TagHelperAttribute("src", src));
        }
    }
}
