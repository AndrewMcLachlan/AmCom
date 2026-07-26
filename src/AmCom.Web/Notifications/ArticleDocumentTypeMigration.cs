using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace Asm.AmCom.Web.Notifications;

/// <summary>
/// One-off migration moving the pages under Articles from the shared <c>contentPage</c> type to the
/// dedicated <c>article</c> type.
/// </summary>
/// <remarks>
/// The backoffice has no "change document type" action (it was dropped in v8 and never returned), and uSync
/// only syncs settings, not which type a given node uses — so this has to be done in code. Recreating the
/// pages by hand is not an option: the published date shown on an article is its <c>CreateDate</c>, and new
/// nodes would reset it. <see cref="IContent.ChangeContentType(IContentType)"/> preserves CreateDate, keys,
/// URLs and version history.
///
/// Runs once per environment, guarded by a key/value flag, and is safe to leave in place afterwards.
/// </remarks>
public class ArticleDocumentTypeMigration : INotificationHandler<UmbracoApplicationStartedNotification>
{
    private const string StateKey = "AmCom.Migration.ArticleDocumentType";
    private const string ArticleAlias = "article";
    private const string ContentPageAlias = "contentPage";
    private static readonly Guid ArticlesContainerKey = new("d38a360c-400f-4262-8913-a34041c63bc7");

    private readonly IKeyValueService _keyValueService;
    private readonly IContentService _contentService;
    private readonly IContentTypeService _contentTypeService;
    private readonly ILogger<ArticleDocumentTypeMigration> _logger;

    public ArticleDocumentTypeMigration(IKeyValueService keyValueService, IContentService contentService, IContentTypeService contentTypeService, ILogger<ArticleDocumentTypeMigration> logger)
    {
        _keyValueService = keyValueService;
        _contentService = contentService;
        _contentTypeService = contentTypeService;
        _logger = logger;
    }

    public void Handle(UmbracoApplicationStartedNotification notification)
    {
        if (_keyValueService.GetValue(StateKey) is not null) return;

        var articleType = _contentTypeService.Get(ArticleAlias);
        if (articleType is null)
        {
            // uSync imports the type at startup too; if it isn't there yet, leave the flag unset and retry next boot.
            _logger.LogWarning("Article migration skipped: document type '{Alias}' not found.", ArticleAlias);
            return;
        }

        var container = _contentService.GetById(ArticlesContainerKey);
        if (container is null)
        {
            _logger.LogWarning("Article migration skipped: Articles container {Key} not found.", ArticlesContainerKey);
            return;
        }

        // propertyAliases null loads every property — the values all have to be carried across below.
        var children = _contentService.GetPagedChildren(container.Id, 0, Int32.MaxValue, out _, propertyAliases: null, filter: null, ordering: null, loadTemplates: true)
                                      .Where(c => c.ContentType.Alias == ContentPageAlias)
                                      .ToList();

        // Rewriting the body below is a mechanical rebind, not an edit — keep LastContentUpdateHandler out of it.
        using var suppression = LastContentUpdateSuppression.Begin();

        foreach (var child in children)
        {
            var wasPublished = child.Published;

            // ChangeContentType is declared on the concrete type, not on IContent.
            if (child is not global::Umbraco.Cms.Core.Models.Content content) continue;

            // Only the ISimpleContentType overload is public; the IContentType ones that also remap property
            // data are internal. The simple one repoints the node but leaves the in-memory Properties bound
            // to the OLD type's property types, so anything declared on contentPage rather than inherited
            // from a shared composition ends up orphaned: the page still renders from the published cache
            // while the backoffice shows it empty. Capture the values first...
            var values = content.Properties.ToDictionary(p => p.Alias, p => p.GetValue());

            content.ChangeContentType(new SimpleContentType(articleType));
            content.TemplateId = articleType.DefaultTemplateId;
            _contentService.Save(content);

            // ...then reload. Only a fresh entity binds its properties to the new type's property types;
            // writing to the stale collection would silently land back on the old ones.
            var migrated = _contentService.GetById(child.Id);
            if (migrated is null) continue;

            foreach (var (alias, value) in values)
            {
                // Skips aliases the new type doesn't have — pageType, whose meaning the type now carries.
                if (value is not null && migrated.HasProperty(alias))
                {
                    migrated.SetValue(alias, value);
                }
            }

            _contentService.Save(migrated);

            if (wasPublished)
            {
                _contentService.Publish(migrated, ["*"]);
            }

            _logger.LogInformation("Article migration: '{Name}' moved to the {Alias} document type (republished: {Republished}).", child.Name, ArticleAlias, wasPublished);
        }

        _keyValueService.SetValue(StateKey, $"{children.Count} node(s) migrated");
        _logger.LogInformation("Article migration complete: {Count} node(s) moved to the {Alias} document type.", children.Count, ArticleAlias);
    }
}
