using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace Asm.AmCom.Extensions
{
    public static class HttpRequestExtensions
    {
        public static string UrlReferrer(this HttpRequest request)
        {
            return request.Headers.ContainsKey("Referer") ? request.Headers["Referer"].ToString() : null;
        }

        public static bool IsAjaxRequest(this HttpRequest request)
        {
            return request.Headers != null && request.Headers["X-Requested-With"] == "XMLHttpRequest";
        }
    }
}
