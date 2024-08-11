using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using RegexCapture = System.Text.RegularExpressions.Capture;
using RegexGroup = System.Text.RegularExpressions.Group;

namespace Asm.AmCom.Web.Models;

[DataContract]
public record RegexTestRequest
{
    [DataMember]
    public required string Regex { get; init; }

    [DataMember]
    public required string Text { get; init; }
}

public record RegexTestResponse
{
    public bool Success { get; init; }

    public List<Group> Groups { get; set; } = [];

    public RegexTestResponse(Match match)
    {
        Groups.AddRange(((IEnumerable<RegexGroup>)match.Groups).Select(g => new Group(g)));

        Success = match.Success;
    }
}

public record Group
{
    public int Index { get; init; }

    public int Length { get; init; }

    public bool Success { get; init; }

    public string Value { get; init; }

    public List<Capture> Captures { get; init; } = [];

    public Group(RegexGroup group)
    {
        Captures.AddRange(group.Captures.Select(c => new Capture(c)));
        Success = group.Success;
        Index = group.Index;
        Length = group.Length;
        Value = group.Value;
    }
}

public record Capture(RegexCapture capture)
{
    public int Index { get; } = capture.Index;

    public int Length { get; } = capture.Length;

    public string Value { get; } = capture.Value;
}
