using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Infrastructure.Scoping;
using Umbraco.Extensions;

namespace Asm.AmCom.Web.Data;

/// <summary>
/// Fills in what is missing from <see cref="ContentDateRow"/>, and only what is missing.
/// </summary>
/// <remarks>
/// <para>
/// Runs on every startup and is deliberately incapable of changing a value that is already there. There is no
/// state key to bump: nothing here is a one-shot that has to be replayed, so nothing here can undo a date that
/// was set by hand.
/// </para>
/// <para>
/// <c>firstPublished</c> is read from the earliest Publish entry in the audit log, which on this site reaches
/// back to 2022 and is a record of something that actually happened.
/// </para>
/// <para>
/// <c>lastContentChange</c> is not reconstructed. It was, by hashing <c>pageContent</c> across retained
/// versions and taking the last version whose hash differed — but a stored version is a snapshot of a
/// serialisation, not of an edit, so re-saving an article with no changes produces a new hash whenever the
/// serialiser's output has drifted. That is not a bug that can be patched out with a better query: version
/// history genuinely does not record whether the text changed, only that it was written. So this seeds the
/// hash of the body as it stands now, and from that point on the date moves when the text really does.
/// Articles from before then simply have no updated date until one is set, and a date set by hand stays set.
/// </para>
/// </remarks>
public class ContentDatesSeed : INotificationHandler<UmbracoApplicationStartedNotification>
{
    private const string ArticleNodesSql = """
        SELECT c.nodeId
        FROM umbracoContent c
        JOIN cmsContentType ct ON ct.nodeId = c.contentTypeId
        WHERE ct.alias = 'article'
        """;

    private const string FirstPublishedSql = """
        SELECT l.NodeId AS NodeId, MIN(l.Datestamp) AS FirstPublished
        FROM umbracoLog l
        JOIN umbracoContent c ON c.nodeId = l.NodeId
        JOIN cmsContentType ct ON ct.nodeId = c.contentTypeId
        WHERE l.logHeader = 'Publish' AND ct.alias = 'article'
        GROUP BY l.NodeId
        """;

    private readonly IScopeProvider _scopeProvider;
    private readonly IContentService _contentService;
    private readonly IContentDateService _contentDateService;
    private readonly ILogger<ContentDatesSeed> _logger;

    public ContentDatesSeed(IScopeProvider scopeProvider, IContentService contentService, IContentDateService contentDateService, ILogger<ContentDatesSeed> logger)
    {
        _scopeProvider = scopeProvider;
        _contentService = contentService;
        _contentDateService = contentDateService;
        _logger = logger;
    }

    public void Handle(UmbracoApplicationStartedNotification notification)
    {
        List<int> articles;
        List<FirstPublishedRow> published;

        using (var scope = _scopeProvider.CreateScope(autoComplete: true))
        {
            articles = scope.Database.Fetch<int>(ArticleNodesSql);
            published = scope.Database.Fetch<FirstPublishedRow>(FirstPublishedSql);
        }

        foreach (var row in published.Where(r => r.FirstPublished is not null))
        {
            // Ignored when a value is already stored.
            _contentDateService.SetFirstPublished(row.NodeId, row.FirstPublished!.Value);
        }

        var recorded = 0;

        foreach (var nodeId in articles)
        {
            var content = _contentService.GetById(nodeId);
            if (content is null) continue;

            // Hashed through the same path the save handler uses, so the first real edit after this compares
            // like with like rather than tripping over two different ways of reading the same body.
            var hash = ArticleBody.Hash(content);

            if (hash is null)
            {
                _logger.LogWarning("No body found on article {Id} ({Name}); its changes cannot be tracked.", nodeId, content.Name);
                continue;
            }

            // Only writes where no hash is stored yet; never moves a date on its own.
            _contentDateService.RecordBody(nodeId, hash, DateTime.UtcNow);
            recorded++;
        }

        _logger.LogInformation("Content dates reconciled: {Published} first-published date(s) available, {Recorded} of {Total} article bodies hashed.", published.Count, recorded, articles.Count);
    }

    private sealed class FirstPublishedRow
    {
        public int NodeId { get; set; }
        public DateTime? FirstPublished { get; set; }
    }
}
