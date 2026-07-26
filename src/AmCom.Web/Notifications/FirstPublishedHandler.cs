using Asm.AmCom.Web.Data;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace Asm.AmCom.Web.Notifications;

/// <summary>
/// Records when an article first goes live.
/// </summary>
/// <remarks>
/// Umbraco has no first-published date. <c>CreateDate</c> is when the node was created, which for an article
/// drafted over several days is earlier than publication, and the published version's date is the most recent
/// publish rather than the first. The service ignores the call when a value is already stored, so
/// republishing never restates when an article came out.
/// </remarks>
public class FirstPublishedHandler : INotificationHandler<ContentPublishedNotification>
{
    private const string ArticleAlias = "article";

    private readonly IContentDateService _contentDateService;

    public FirstPublishedHandler(IContentDateService contentDateService) =>
        _contentDateService = contentDateService;

    public void Handle(ContentPublishedNotification notification)
    {
        foreach (var content in notification.PublishedEntities)
        {
            if (content.ContentType.Alias != ArticleAlias) continue;

            _contentDateService.SetFirstPublished(content.Id, DateTime.UtcNow);
        }
    }
}
