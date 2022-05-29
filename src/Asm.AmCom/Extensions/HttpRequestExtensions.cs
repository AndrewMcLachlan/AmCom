namespace Microsoft.AspNetCore.Http;

public static class HttpRequestExtensions
{
    private const string XForwardedHost = "X-Forwarded-Host";

    public static string OriginHost(this HttpRequest request)
    {
        if (request.Headers.ContainsKey(XForwardedHost))
        {
            return request.Headers[XForwardedHost].First();
        }

        return request.Host.ToString();
    }

    public static string UrlReferrer(this HttpRequest request)
    {
        return request.Headers.ContainsKey("Referer") ? request.Headers["Referer"].ToString() : null;
    }

    public static bool IsAjaxRequest(this HttpRequest request)
    {
        return request.Headers != null && request.Headers["X-Requested-With"] == "XMLHttpRequest";
    }
}
