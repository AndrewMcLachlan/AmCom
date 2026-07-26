using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;

namespace Asm.AmCom.Web.Notifications;

public class LastContentUpdateComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.AddNotificationHandler<ContentSavingNotification, LastContentUpdateHandler>();
        builder.AddNotificationHandler<UmbracoApplicationStartedNotification, ArticleDocumentTypeMigration>();
    }
}
