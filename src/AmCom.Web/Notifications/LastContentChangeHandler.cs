using Asm.AmCom.Web.Data;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace Asm.AmCom.Web.Notifications;

/// <summary>
/// Records when an article's body actually changes, ignoring metadata-only saves.
/// </summary>
/// <remarks>
/// A node's <c>UpdateDate</c> moves on every save — a description tweak, a re-publish, a bulk migration
/// touching every node — so it overstates when an article was really revised. Umbraco's dirty tracking knows
/// which properties changed, but only inside the save pipeline, so the answer is captured here.
/// </remarks>
public class LastContentChangeHandler : INotificationHandler<ContentSavedNotification>
{
    private const string BodyProperty = "pageContent";
    private const string ArticleAlias = "article";

    private readonly IContentDateService _contentDateService;

    public LastContentChangeHandler(IContentDateService contentDateService) =>
        _contentDateService = contentDateService;

    public void Handle(ContentSavedNotification notification)
    {
        // Migrations rewrite the body to move it between property types. That is not an editorial revision,
        // and recording it would produce exactly the bogus "updated today" this handler exists to avoid.
        if (LastContentChangeSuppression.IsActive) return;

        foreach (var content in notification.SavedEntities)
        {
            if (content.ContentType.Alias != ArticleAlias) continue;

            // WasPropertyDirty (not IsPropertyDirty) because this runs after the save is persisted.
            if (!content.WasPropertyDirty(BodyProperty)) continue;

            _contentDateService.SetLastContentChange(content.Id, DateTime.UtcNow);
        }
    }
}

/// <summary>
/// Suppresses <see cref="LastContentChangeHandler"/> for saves that rewrite content mechanically rather than
/// editorially — currently document type migrations, which must rewrite the body to rebind it to the new
/// type's property types.
/// </summary>
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
