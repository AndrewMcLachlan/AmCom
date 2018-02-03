using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Microsoft.AspNetCore.Mvc.Razor
{
    public static class RazorPageExtensions
    {
        public static IHtmlContent RenderSection(this RazorPage page, string sectionName, IHtmlHelper html, string defaultView)
        {
            if (page.IsSectionDefined(sectionName))
            {
                return page.RenderSection(sectionName);
            }
            else
            {
                return html.Partial(defaultView);
            }
        }
    }
}
