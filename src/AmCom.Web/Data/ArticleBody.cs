using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Umbraco.Cms.Core.Models;
using Umbraco.Extensions;

namespace Asm.AmCom.Web.Data;

/// <summary>
/// Identifies an article body by what it says, not by how Umbraco happens to have stored it.
/// </summary>
/// <remarks>
/// The rich text editor stores <c>{"markup":"...","blocks":{...}}</c>. Only <c>markup</c> is editorial; the
/// blocks envelope is re-emitted by whichever serialiser last wrote the value. Hashing the whole value made
/// that a trap: moving the articles onto the Article document type rewrote <c>"Layout"</c> as <c>"layout"</c>
/// and changed nothing else, and a whole-value hash read that one character as the article being revised —
/// so every article claimed it had been updated on the day of the deploy.
/// </remarks>
internal static class ArticleBody
{
    public const string PropertyAlias = "pageContent";

    /// <summary>Hashes an article's body, or null when it has none to hash.</summary>
    public static string? Hash(IContentBase content) =>
        Hash(content.GetValue<string>(PropertyAlias));

    /// <summary>Hashes a raw stored body value, or null when it is empty.</summary>
    public static string? Hash(string? value)
    {
        var markup = Markup(value);

        return String.IsNullOrWhiteSpace(markup)
            ? null
            : Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(markup)));
    }

    private static string? Markup(string? value)
    {
        if (String.IsNullOrWhiteSpace(value)) return null;

        // Values written before the rich text editor gained block support are bare HTML, not JSON.
        if (!value.AsSpan().TrimStart().StartsWith("{")) return value;

        try
        {
            using var document = JsonDocument.Parse(value);

            if (document.RootElement.ValueKind == JsonValueKind.Object &&
                document.RootElement.TryGetProperty("markup", out var markup) &&
                markup.ValueKind == JsonValueKind.String)
            {
                return markup.GetString();
            }
        }
        catch (JsonException)
        {
            // Not the shape we expected — fall back to the whole value rather than lose the change entirely.
        }

        return value;
    }
}
