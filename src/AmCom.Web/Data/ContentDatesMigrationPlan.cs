using Umbraco.Cms.Infrastructure.Migrations;

namespace Asm.AmCom.Web.Data;

public class ContentDatesMigrationPlan : MigrationPlan
{
    public ContentDatesMigrationPlan() : base("AmCom.ContentDates") =>
        From(String.Empty).To<AddContentDatesTable>("content-dates-1");
}

public class AddContentDatesTable : AsyncMigrationBase
{
    public AddContentDatesTable(IMigrationContext context) : base(context)
    {
    }

    protected override Task MigrateAsync()
    {
        if (!TableExists(ContentDateRow.TableName))
        {
            Create.Table<ContentDateRow>().Do();
        }

        return Task.CompletedTask;
    }
}
