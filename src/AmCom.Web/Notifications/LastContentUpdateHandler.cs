using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace Asm.AmCom.Web.Notifications;

/// <summary>
/// Stamps <c>lastContentUpdate</c> whenever a page's body actually changes.
/// </summary>
/// <remarks>
/// The node's own <c>UpdateDate</c> moves on every save, including metadata-only ones — a description tweak,
/// a re-publish, a bulk migration touching every node — so it overstates when an article was really revised.
/// Dirty tracking only exists inside the save pipeline, so the answer is captured here and persisted as a
/// property, which puts it in the published cache and makes it free to read at render time.
/// </remarks>
public class LastContentUpdateHandler : INotificationHandler<ContentSavingNotification>
{
    private const string BodyProperty = "pageContent";
    private const string LastContentUpdateProperty = "lastContentUpdate";

    public void Handle(ContentSavingNotification notification)
    {
        // Migrations rewrite the body to move it between property types. That is not an editorial revision,
        // and stamping it would produce exactly the bogus "updated today" this handler exists to avoid.
        if (LastContentUpdateSuppression.IsActive) return;

        foreach (var content in notification.SavedEntities)
        {
            // Applies to any document type carrying the property; everything else is left alone.
            if (!content.HasProperty(LastContentUpdateProperty)) continue;

            // IsPropertyDirty (not WasPropertyDirty) because this runs before the save is persisted.
            if (!content.IsPropertyDirty(BodyProperty)) continue;

            content.SetValue(LastContentUpdateProperty, DateTime.Now);
        }
    }
}

/// <summary>
/// Suppresses <see cref="LastContentUpdateHandler"/> for saves that rewrite content mechanically rather than
/// editorially — currently document type migrations, which must rewrite the body to rebind it to the new
/// type's property types.
/// </summary>
internal static class LastContentUpdateSuppression
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
