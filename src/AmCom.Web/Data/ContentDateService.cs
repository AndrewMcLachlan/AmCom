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

    /// <summary>Records a body change, overwriting any previous value.</summary>
    void SetLastContentChange(int nodeId, DateTime? when);
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
            if (row.FirstPublished is null)
            {
                row.FirstPublished = when;
            }
        });

    public void SetLastContentChange(int nodeId, DateTime? when) =>
        Upsert(nodeId, row => row.LastContentChange = when);

    private void Upsert(int nodeId, Action<ContentDateRow> apply)
    {
        using var scope = _scopeProvider.CreateScope();

        var row = scope.Database.SingleOrDefault<ContentDateRow>($"WHERE nodeId = @0", nodeId);
        var isNew = row is null;
        row ??= new ContentDateRow { NodeId = nodeId };

        apply(row);

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
