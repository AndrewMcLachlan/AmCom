using Asm.AmCom.Web.Data;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace Asm.AmCom.Web.Notifications;

/// <summary>
/// Records when an article's body actually changes, ignoring saves that leave the text alone.
/// </summary>
/// <remarks>
/// A node's <c>UpdateDate</c> moves on every save — a description tweak, a re-publish, a bulk migration
/// touching every node — so it overstates when an article was really revised. Umbraco's dirty tracking is
/// closer, but it reports the property as changed whenever the value was rewritten, including when the new
/// value says exactly what the old one said. Comparing the body against the one seen last time is the only
/// test that survives that, so that is what this does.
/// </remarks>
public class LastContentChangeHandler : INotificationHandler<ContentSavedNotification>
{
    private const string ArticleAlias = "article";

    private readonly IContentDateService _contentDateService;
    private readonly ILogger<LastContentChangeHandler> _logger;

    public LastContentChangeHandler(IContentDateService contentDateService, ILogger<LastContentChangeHandler> logger)
    {
        _contentDateService = contentDateService;
        _logger = logger;
    }

    public void Handle(ContentSavedNotification notification)
    {
        if (LastContentChangeSuppression.IsActive) return;

        foreach (var content in notification.SavedEntities)
        {
            if (content.ContentType.Alias != ArticleAlias) continue;

            var hash = ArticleBody.Hash(content);

            if (hash is null)
            {
                // An article with an empty body. Recording nothing keeps whatever date is already stored,
                // which beats treating "I can't see a body" as "the body changed".
                _logger.LogWarning("No body found on article {Id} ({Name}); leaving its dates untouched.", content.Id, content.Name);
                continue;
            }

            _contentDateService.RecordBody(content.Id, hash, DateTime.UtcNow);
        }
    }
}

/// <summary>
/// Suppresses <see cref="LastContentChangeHandler"/> for saves that rewrite content mechanically rather than
/// editorially — currently document type migrations, which must rewrite the body to rebind it to the new
/// type's property types.
/// </summary>
/// <remarks>
/// Belt and braces since the handler compares the text itself: a mechanical rewrite produces the same body and
/// so moves nothing anyway. Kept because a future migration might legitimately reshape the markup.
/// </remarks>
internal static class LastContentChangeSuppression
{
    private static readonly AsyncLocal<bool> Active = new();

    public static bool IsActive => Active.Value;

    public static IDisposable Begin() => new Scope();

    private sealed class Scope : IDisposable
    {
        public Scope() => Active.Value = true;

        public void Dispose() => Active.Value = false;
    }
}
