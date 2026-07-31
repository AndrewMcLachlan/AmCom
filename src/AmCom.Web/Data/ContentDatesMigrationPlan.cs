using Umbraco.Cms.Infrastructure.Migrations;

namespace Asm.AmCom.Web.Data;

public class ContentDatesMigrationPlan : MigrationPlan
{
    public ContentDatesMigrationPlan() : base("AmCom.ContentDates") =>
        From(String.Empty)
            .To<AddContentDatesTable>("content-dates-1")
            .To<AddContentHashColumn>("content-dates-2");
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

public class AddContentHashColumn : AsyncMigrationBase
{
    public AddContentHashColumn(IMigrationContext context) : base(context)
    {
    }

    protected override Task MigrateAsync()
    {
        // Table<ContentDateRow>() above creates the column on a fresh database, so this is only for the ones
        // that already have the table.
        if (!ColumnExists(ContentDateRow.TableName, "contentHash"))
        {
            Create.Column("contentHash").OnTable(ContentDateRow.TableName).AsString(64).Nullable().Do();
        }

        return Task.CompletedTask;
    }
}
