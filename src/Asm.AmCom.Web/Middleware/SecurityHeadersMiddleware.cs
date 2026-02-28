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
        // Get the path to check for exceptions
        var path = context.Request.Path.Value?.ToLowerInvariant() ?? String.Empty;
        
        // Don't apply security headers to Umbraco back office and install
        var isUmbracoPath = path.StartsWith("/umbraco") || path.StartsWith("/install");

        if (!isUmbracoPath)
        {
            // Remove server headers
            context.Response.Headers.Remove("X-Powered-By");
            context.Response.Headers.Remove("X-AspNet-Version");
            context.Response.Headers.Remove("X-AspNetMvc-Version");
            context.Response.Headers.Remove("Server");

            // Add security headers
            context.Response.Headers.Append("Content-Security-Policy",  "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'");
            context.Response.Headers.Append("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
            context.Response.Headers.Append("Cross-Origin-Embedder-Policy", "require-corp");
            context.Response.Headers.Append("Cross-Origin-Resource-Policy", "same-origin");
            context.Response.Headers.Append("X-Frame-Options", "same-origin");
            context.Response.Headers.Append("X-Content-Type-Options", "nosniff");
            context.Response.Headers.Append("Referrer-Policy", "strict-origin-when-cross-origin");
            context.Response.Headers.Append("Permissions-Policy", "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()");
        }

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
