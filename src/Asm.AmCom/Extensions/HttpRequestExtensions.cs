using Microsoft.AspNetCore.Http;

namespace Microsoft.AspNetCore.Http;

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
