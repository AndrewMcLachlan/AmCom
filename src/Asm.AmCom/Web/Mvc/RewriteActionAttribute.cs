using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc.ActionConstraints;

namespace Asm.AmCom.Web.Mvc
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
    public class RewriteActionAttribute : Attribute, IActionConstraint
    {
        public int Order => 0;

        public string ActionParameterName { get; }

        public RewriteActionAttribute(string actionParamaeterName)
        {
            ActionParameterName = actionParamaeterName;
        }

        public bool Accept(ActionConstraintContext context)
        {
            context.RouteContext.RouteData.Values["action"] = context.RouteContext.RouteData.Values[ActionParameterName];
            return true;
        }
    }
}
