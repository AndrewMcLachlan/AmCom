using Asm.AmCom.Web.Data;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;

namespace Asm.AmCom.Web.Notifications;

public class ContentDatesComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.AddSingleton<IContentDateService, ContentDateService>();

        builder.AddNotificationHandler<ContentSavedNotification, LastContentChangeHandler>();
        builder.AddNotificationHandler<ContentPublishedNotification, FirstPublishedHandler>();

        // Order matters: create the table, move the pages onto the Article type, then backfill their dates.
        builder.AddNotificationHandler<UmbracoApplicationStartedNotification, RunContentDatesMigration>();
        builder.AddNotificationHandler<UmbracoApplicationStartedNotification, ArticleDocumentTypeMigration>();
        builder.AddNotificationHandler<UmbracoApplicationStartedNotification, ContentDatesSeed>();
    }
}
