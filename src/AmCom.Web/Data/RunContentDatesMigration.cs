using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Migrations;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Scoping;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Infrastructure.Migrations.Upgrade;

namespace Asm.AmCom.Web.Data;

/// <summary>Creates the <see cref="ContentDateRow.TableName"/> table on startup. Idempotent.</summary>
/// <remarks>
/// Deliberately a synchronous handler despite the async upgrader underneath. Umbraco runs sync and async
/// notification handlers as separate pipelines, so an async handler here is not ordered against the sync
/// seed that depends on this table existing — which is exactly how the first attempt failed.
/// </remarks>
public class RunContentDatesMigration : INotificationHandler<UmbracoApplicationStartedNotification>
{
    private readonly ICoreScopeProvider _scopeProvider;
    private readonly IMigrationPlanExecutor _migrationPlanExecutor;
    private readonly IKeyValueService _keyValueService;

    public RunContentDatesMigration(ICoreScopeProvider scopeProvider, IMigrationPlanExecutor migrationPlanExecutor, IKeyValueService keyValueService)
    {
        _scopeProvider = scopeProvider;
        _migrationPlanExecutor = migrationPlanExecutor;
        _keyValueService = keyValueService;
    }

    public void Handle(UmbracoApplicationStartedNotification notification) =>
        new Upgrader(new ContentDatesMigrationPlan())
            .ExecuteAsync(_migrationPlanExecutor, _scopeProvider, _keyValueService)
            .GetAwaiter()
            .GetResult();
}
