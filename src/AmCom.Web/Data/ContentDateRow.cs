using NPoco;
using Umbraco.Cms.Infrastructure.Persistence.DatabaseAnnotations;

namespace Asm.AmCom.Web.Data;

/// <summary>
/// Dates we care about that Umbraco records only in stores it considers disposable.
/// </summary>
/// <remarks>
/// <para>
/// <c>firstPublished</c> exists in the audit log, and <c>lastContentChange</c> can be reconstructed by
/// diffing version history — but the log is subject to <c>LogScrubberJob</c> and version cleanup is already
/// enabled and already destructive on this site. Both losses would be silent and unrecoverable, so these two
/// facts are captured as they happen and owned here.
/// </para>
/// <para>
/// Deliberately not document type properties: these are metadata *about* content, not content. Keeping them
/// out of the content type means editors can't contradict them, and changing a date doesn't require
/// republishing the article.
/// </para>
/// </remarks>
[TableName(TableName)]
[PrimaryKey(nameof(NodeId), AutoIncrement = false)]
[ExplicitColumns]
public class ContentDateRow
{
    public const string TableName = "amcomContentDates";

    [Column("nodeId")]
    [PrimaryKeyColumn(AutoIncrement = false)]
    public int NodeId { get; set; }

    /// <summary>When the node first went live. Never updated once set.</summary>
    [Column("firstPublished")]
    [NullSetting(NullSetting = NullSettings.Null)]
    public DateTime? FirstPublished { get; set; }

    /// <summary>
    /// When the body last actually changed. Authoritative: set it by hand and nothing will overwrite it
    /// until the article is genuinely edited again.
    /// </summary>
    [Column("lastContentChange")]
    [NullSetting(NullSetting = NullSettings.Null)]
    public DateTime? LastContentChange { get; set; }

    /// <summary>
    /// Hash of the body as last seen, so a save can be told from a re-serialisation of the same text.
    /// </summary>
    [Column("contentHash")]
    [NullSetting(NullSetting = NullSettings.Null)]
    [Length(64)]
    public string? ContentHash { get; set; }
}
