using Microsoft.Extensions.Caching.Memory;
using Umbraco.Cms.Infrastructure.Scoping;
using Umbraco.Extensions;

namespace Asm.AmCom.Web.Data;

public interface IContentDateService
{
    /// <summary>Reads the stored dates for a node, or null if it has none.</summary>
    ContentDateRow? Get(int nodeId);

    /// <summary>Records the first publication, leaving an existing value alone.</summary>
    void SetFirstPublished(int nodeId, DateTime when);

    /// <summary>
    /// Records the body as currently seen, advancing <see cref="ContentDateRow.LastContentChange"/> only if it
    /// differs from the body seen last time.
    /// </summary>
    void RecordBody(int nodeId, string hash, DateTime when);
}

public class ContentDateService : IContentDateService
{
    private readonly IScopeProvider _scopeProvider;
    private readonly IMemoryCache _cache;

    public ContentDateService(IScopeProvider scopeProvider, IMemoryCache cache)
    {
        _scopeProvider = scopeProvider;
        _cache = cache;
    }

    public ContentDateRow? Get(int nodeId) =>
        _cache.GetOrCreate(CacheKey(nodeId), _ =>
        {
            using var scope = _scopeProvider.CreateScope(autoComplete: true);
            return scope.Database.SingleOrDefault<ContentDateRow>(
                $"WHERE nodeId = @0", nodeId);
        });

    public void SetFirstPublished(int nodeId, DateTime when) =>
        Upsert(nodeId, row =>
        {
            // First publication only — a later publish must not restate when something came out.
            if (row.FirstPublished is not null) return false;

            row.FirstPublished = when;
            return true;
        });

    public void RecordBody(int nodeId, string hash, DateTime when) =>
        Upsert(nodeId, row =>
        {
            // Same text as last time: a re-publish, a metadata edit, or the serialiser rewriting its own
            // envelope. None of those are a revision.
            if (row.ContentHash == hash) return false;

            // Nothing to compare against yet, so there is no evidence of a change — record what the body is
            // now and leave the date alone. This is what stops a first sighting (a newly created article, or
            // the backfill running against an existing one) from being reported as an update.
            if (row.ContentHash is not null)
            {
                row.LastContentChange = when;
            }

            row.ContentHash = hash;
            return true;
        });

    private void Upsert(int nodeId, Func<ContentDateRow, bool> apply)
    {
        using var scope = _scopeProvider.CreateScope();

        var row = scope.Database.SingleOrDefault<ContentDateRow>($"WHERE nodeId = @0", nodeId);
        var isNew = row is null;
        row ??= new ContentDateRow { NodeId = nodeId };

        if (!apply(row) && !isNew)
        {
            scope.Complete();
            return;
        }

        if (isNew)
        {
            scope.Database.Insert(row);
        }
        else
        {
            scope.Database.Update(row);
        }

        scope.Complete();
        _cache.Remove(CacheKey(nodeId));
    }

    private static string CacheKey(int nodeId) => $"amcom-content-dates:{nodeId}";
}
