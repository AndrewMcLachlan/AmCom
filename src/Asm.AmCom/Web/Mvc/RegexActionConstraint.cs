using Microsoft.AspNetCore.Mvc.ActionConstraints;

namespace Asm.AmCom.Web.Mvc;

[AttributeUsage(AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
public class RegexActionConstraint : Attribute, IActionConstraint
{
    public int Order => 0;

    public required string Regex { get; set; }

    public bool Accept(ActionConstraintContext context)
    {
        System.Text.RegularExpressions.Regex regex = new(Regex);

        return regex.IsMatch(context.RouteContext.RouteData.Values["action"] as string ?? String.Empty);
    }
}
