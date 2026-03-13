using Humanizer;

namespace Asm.AmCom.Web.Middleware;

/// <summary>
/// Middleware to add security headers to responses.
/// Replaces IIS web.config customHeaders functionality.
/// </summary>
public class SecurityHeadersMiddleware
{
    private readonly RequestDelegate _next;

    public SecurityHeadersMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        context.Response.OnStarting(() =>
        {
            // Remove server headers from all responses
            context.Response.Headers.Remove("X-Powered-By");
            context.Response.Headers.Remove("X-AspNet-Version");
            context.Response.Headers.Remove("X-AspNetMvc-Version");
            context.Response.Headers.Remove("Server");

            var contentType = context.Response.ContentType;
            if (contentType == null || !contentType.StartsWith("text/html", StringComparison.OrdinalIgnoreCase))
            {
                return Task.CompletedTask;
            }

            var path = context.Request.Path.Value?.ToLowerInvariant() ?? String.Empty;
            if (path.StartsWith("/umbraco") || path.StartsWith("/install"))
            {
                return Task.CompletedTask;
            }

            // Add security headers to HTML documents only
            context.Response.Headers.Append("Content-Security-Policy", "default-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; report-to csp-endpoint");
            context.Response.Headers.Append("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
            context.Response.Headers.Append("Cross-Origin-Embedder-Policy", "require-corp");
            context.Response.Headers.Append("Cross-Origin-Resource-Policy", "same-origin");
            context.Response.Headers.Append("X-Frame-Options", "same-origin");
            context.Response.Headers.Append("X-Content-Type-Options", "nosniff");
            context.Response.Headers.Append("Referrer-Policy", "strict-origin-when-cross-origin");
            context.Response.Headers.Append("Permissions-Policy", "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()");
            context.Response.Headers.Append("Reporting-Endpoints", $"integrity-endpoint=\"{context.Request.Scheme}://{context.Request.Host}/api/reporting/integrity\", csp-endpoint=\"{context.Request.Scheme}://{context.Request.Host}/api/reporting/csp\"");
            // This does not seem ready for prime-time
            //context.Response.Headers.Append("Integrity-Policy-Report-Only", "blocked-destinations=(script), endpoints=(integrity-endpoint)");
            context.Response.Headers.Append("Report-To", $"{{\"group\":\"integrity-endpoint\",\"max_age\":86400,\"endpoints\":[{{\"url\":\"{context.Request.Scheme}://{context.Request.Host}/api/reporting/integrity\"}}]}}, {{\"group\":\"csp-endpoint\",\"max_age\":86400,\"endpoints\":[{{\"url\":\"{context.Request.Scheme}://{context.Request.Host}/api/reporting/csp\"}}]}}");

            return Task.CompletedTask;
        });

        await _next(context);
    }
}

/// <summary>
/// Extension methods for registering the SecurityHeadersMiddleware.
/// </summary>
public static class SecurityHeadersMiddlewareExtensions
{
    public static IApplicationBuilder UseCustomSecurityHeaders(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<SecurityHeadersMiddleware>();
    }
}
