using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Microsoft.AspNetCore.Mvc.Controllers;

namespace Asm.AmCom.Web.Mvc
{
    /// <summary>
    /// Controller descriptor for RegEx-based actions.
    /// </summary>
    public class RegexReflectedControllerDescriptor : ControllerActionDescriptor
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RegexReflectedControllerDescriptor"/> class.
        /// </summary>
        /// <param name="controllerType"></param>
        public RegexReflectedControllerDescriptor(Type controllerType) : base(controllerType)
        {
        }

        /// <summary>
        /// Finds an action method in the controller based on a regex expression attributed to the method.
        /// </summary>
        /// <param name="controllerContext">The controller context.</param>
        /// <param name="actionName">The name of the action to process.</param>
        /// <returns>An action descriptor.</returns>
        public override ActionDescriptor FindAction(ControllerContext controllerContext, string actionName)
        {
            ActionDescriptor ad = base.FindAction(controllerContext, actionName);

            if (ad == null)
            {
                foreach (MethodInfo mi in ControllerType.GetMethods(BindingFlags.Public | BindingFlags.Instance))
                {
                    object[] attributes = mi.GetCustomAttributes(typeof(ActionNameAttribute), true);

                    if (attributes.Length > 0)
                    {
                        ActionNameAttribute att = attributes[0] as ActionNameAttribute;

                        if (att != null)
                        {
                            Regex actionRegex = new Regex(att.Name);

                            if (actionRegex.IsMatch(actionName))
                            {
                                ad = new ReflectedActionDescriptor(mi, actionName, this);
                            }
                        }
                    }
                }
            }

            return ad;
        }
    }
}
