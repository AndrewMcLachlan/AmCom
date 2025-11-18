namespace Asm.AmCom.Web.Middleware;

/// <summary>
/// Middleware to handle URL rewriting rules.
/// Replaces IIS web.config rewrite rules functionality.
/// </summary>
public class UrlRewriteMiddleware
{
    private readonly RequestDelegate _next;

    public UrlRewriteMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var path = context.Request.Path.Value;
        var queryString = context.Request.QueryString.Value;

        // Skip rewrite rules for Umbraco back office and install
        var isUmbracoPath = path?.StartsWith("/umbraco", StringComparison.OrdinalIgnoreCase) == true ||
                           path?.StartsWith("/install", StringComparison.OrdinalIgnoreCase) == true;

        if (!isUmbracoPath && !string.IsNullOrEmpty(path))
        {
            // Rule 1: Lower Case URL (except PDF files)
            if (!path.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase) && path.Any(char.IsUpper))
            {
                var lowerPath = path.ToLowerInvariant();
                var redirectUrl = $"{lowerPath}{queryString}";
                context.Response.StatusCode = StatusCodes.Status301MovedPermanently;
                context.Response.Headers.Location = redirectUrl;
                return;
            }

            // Rule 2: Remove Trailing Slash (except directories)
            if (path.EndsWith('/') && path.Length > 1)
            {
                var pathWithoutTrailingSlash = path.TrimEnd('/');
                
                // Check if it's a physical file or directory
                var physicalPath = context.Request.PathBase.Add(context.Request.Path).Value;
                var isDirectory = Directory.Exists(physicalPath);
                var isFile = File.Exists(physicalPath);

                if (!isDirectory && !isFile)
                {
                    var redirectUrl = $"{pathWithoutTrailingSlash}{queryString}";
                    context.Response.StatusCode = StatusCodes.Status301MovedPermanently;
                    context.Response.Headers.Location = redirectUrl;
                    return;
                }
            }
        }

        await _next(context);
    }
}

/// <summary>
/// Extension methods for registering the UrlRewriteMiddleware.
/// </summary>
public static class UrlRewriteMiddlewareExtensions
{
    public static IApplicationBuilder UseUrlRewrite(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<UrlRewriteMiddleware>();
    }
}
