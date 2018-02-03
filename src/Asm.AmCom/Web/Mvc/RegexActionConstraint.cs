using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc.ActionConstraints;

namespace Asm.AmCom.Web.Mvc
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
    public class RegexActionConstraint : Attribute, IActionConstraint
    {
        public int Order => 0;

        public string Regex { get; set; }

        public bool Accept(ActionConstraintContext context)
        {
            System.Text.RegularExpressions.Regex regex = new System.Text.RegularExpressions.Regex(Regex);

            return regex.IsMatch(context.RouteContext.RouteData.Values["action"] as string);
        }
    }
}
