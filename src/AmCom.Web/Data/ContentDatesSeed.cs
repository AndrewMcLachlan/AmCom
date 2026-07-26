using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Infrastructure.Scoping;
using Umbraco.Extensions;

namespace Asm.AmCom.Web.Data;

/// <summary>
/// Backfills <see cref="ContentDateRow"/> from Umbraco's own records, once per environment.
/// </summary>
/// <remarks>
/// Both dates are recovered from real data rather than guessed. <c>firstPublished</c> comes from the earliest
/// Publish entry in the audit log, which on this site reaches back to 2022. <c>lastContentChange</c> is
/// reconstructed by hashing <c>pageContent</c> across retained versions and taking the last version where it
/// differs from the one before it.
///
/// That second reconstruction is deliberately conservative: a change is only counted between two *retained*
/// versions. The earliest retained version is skipped, because "oldest snapshot still held" is
/// indistinguishable from "created then", and counting it would manufacture an update date out of version
/// cleanup. Articles with nothing detectable are left null and simply show no updated date.
/// </remarks>
public class ContentDatesSeed : INotificationHandler<UmbracoApplicationStartedNotification>
{
    private const string StateKey = "AmCom.Migration.ContentDatesSeed";

    private const string FirstPublishedSql = $"""
        SELECT l.NodeId AS NodeId, MIN(l.Datestamp) AS FirstPublished
        FROM umbracoLog l
        JOIN umbracoContent c ON c.nodeId = l.NodeId
        JOIN cmsContentType ct ON ct.nodeId = c.contentTypeId
        WHERE l.logHeader = 'Publish' AND ct.alias = 'article'
        GROUP BY l.NodeId
        """;

    // Leading semicolon: NPoco prepends to the command, and a CTE must start a statement.
    private const string LastContentChangeSql = $"""
        ;WITH v AS (
            SELECT cv.nodeId, cv.versionDate,
                   HASHBYTES('MD5', CAST(pd.textValue AS nvarchar(max))) AS h
            FROM umbracoContentVersion cv
            JOIN umbracoContent c ON c.nodeId = cv.nodeId
            JOIN cmsContentType ct ON ct.nodeId = c.contentTypeId
            -- Matched by alias alone, not scoped to the article type: versions predating the document type
            -- migration still reference contentPage's pageContent property type, and excluding them would
            -- hide every change made before the move.
            JOIN cmsPropertyType pt ON pt.Alias = 'pageContent'
            JOIN umbracoPropertyData pd ON pd.versionId = cv.id AND pd.propertyTypeId = pt.id
            WHERE ct.alias = 'article' AND pd.textValue IS NOT NULL
        ), d AS (
            SELECT nodeId, versionDate, h,
                   LAG(h) OVER (PARTITION BY nodeId ORDER BY versionDate) AS prevH
            FROM v
        )
        SELECT nodeId AS NodeId, MAX(versionDate) AS LastContentChange
        FROM d
        WHERE prevH IS NOT NULL AND h <> prevH
        GROUP BY nodeId
        """;

    private readonly IScopeProvider _scopeProvider;
    private readonly IKeyValueService _keyValueService;
    private readonly IContentDateService _contentDateService;
    private readonly ILogger<ContentDatesSeed> _logger;

    public ContentDatesSeed(IScopeProvider scopeProvider, IKeyValueService keyValueService, IContentDateService contentDateService, ILogger<ContentDatesSeed> logger)
    {
        _scopeProvider = scopeProvider;
        _keyValueService = keyValueService;
        _contentDateService = contentDateService;
        _logger = logger;
    }

    public void Handle(UmbracoApplicationStartedNotification notification)
    {
        if (_keyValueService.GetValue(StateKey) is not null) return;

        List<SeedRow> published;
        List<SeedRow> changed;
        using (var scope = _scopeProvider.CreateScope(autoComplete: true))
        {
            published = scope.Database.Fetch<SeedRow>(FirstPublishedSql);
            changed = scope.Database.Fetch<SeedRow>(LastContentChangeSql);
        }

        foreach (var row in published.Where(r => r.FirstPublished is not null))
        {
            _contentDateService.SetFirstPublished(row.NodeId, row.FirstPublished!.Value);
        }

        foreach (var row in changed.Where(r => r.LastContentChange is not null))
        {
            _contentDateService.SetLastContentChange(row.NodeId, row.LastContentChange!.Value);
        }

        _keyValueService.SetValue(StateKey, $"{published.Count} published, {changed.Count} changed");
        _logger.LogInformation("Content dates seeded: {Published} first-published, {Changed} last-changed.", published.Count, changed.Count);
    }

    private sealed class SeedRow
    {
        public int NodeId { get; set; }
        public DateTime? FirstPublished { get; set; }
        public DateTime? LastContentChange { get; set; }
    }
}
