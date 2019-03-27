using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Mvc
{
    public static partial class KnownProblemDetails
    {
        public static class RegexTester
        {
            public static readonly ProblemDetails NullRequest = new ProblemDetails
            {
                Type = "http://www.andrewmclachlan.com/problems/regex/null-request",
                Title = "Request body missing or not valid",
                Detail = "Either the request body was empty or the request body was not correctly formatted",
                Status = 400
            };

            public static readonly ProblemDetails EmptyRegex = new ProblemDetails
            {
                Type = "http://www.andrewmclachlan.com/problems/regex/empty-regex",
                Title = "Regex must be supplied",
                Detail = "The regular expression is empty",
                Status = 400
            };
            public static readonly ProblemDetails InvalidRegex = new ProblemDetails
            {
                Type = "http://www.andrewmclachlan.com/problems/regex/invalid-regex",
                Title = "Not a valid Regex",
                Detail = "The regular expression is not correctly formatted",
                Status = 400
            };
        }
    }
}
