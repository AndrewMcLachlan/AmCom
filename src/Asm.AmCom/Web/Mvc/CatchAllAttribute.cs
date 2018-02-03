using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc.ActionConstraints;

namespace Asm.AmCom.Web.Mvc
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
    public class CatchAllAttribute : Attribute, IActionConstraint
    {
        public int Order => 0;

        public bool Accept(ActionConstraintContext context)
        {
            return true;
            //context.RouteContext.RouteData.Values["action"];
        }
    }
}
