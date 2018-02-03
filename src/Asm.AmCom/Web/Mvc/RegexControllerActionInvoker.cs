using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc.Internal;

namespace Asm.AmCom.Web.Mvc
{
    public class RegexControllerActionInvoker
    {
        /// <summary>
        /// An action invoker that supports regular expressions.
        /// </summary>
        /// <remarks>
        /// Decorate an action with an <see cref="System.Web.Mvc.ActionNameAttribute"/> with a regular expression.
        /// </remarks>
        public class RegexControllerActionInvoker : ControllerActionInvoker
        {
            private static Dictionary<Type, RegexReflectedControllerDescriptor> _cache = new Dictionary<Type, RegexReflectedControllerDescriptor>();

            /// <summary>Retrieves information about the controller by using the specified controller context.</summary>
            /// <param name="controllerContext">The controller context.</param>
            /// <returns>Information about the controller.</returns>
            protected override ControllerDescriptor GetControllerDescriptor(ControllerContext controllerContext)
            {
                Type controllerType = controllerContext.Controller.GetType();

                if (_cache.Keys.Contains(controllerType))
                {
                    return _cache[controllerType];
                }
                else
                {
                    RegexReflectedControllerDescriptor cd = new RegexReflectedControllerDescriptor(controllerType);
                    _cache[controllerType] = cd;
                    return cd;
                }
            }
        }
    }
}
