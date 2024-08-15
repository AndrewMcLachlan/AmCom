using System.Text.RegularExpressions;
using RegexCapture = System.Text.RegularExpressions.Capture;
using RegexGroup = System.Text.RegularExpressions.Group;

namespace Asm.AmCom.Web.Models;

public record RegexTestRequest
{
    public required string Regex { get; init; }

    public required string Text { get; init; }
}

public class RegexTestResponse
{
    public bool Success { get; init; }

    public List<Group> Groups { get; set; } = [];

    public RegexTestResponse(Match match)
    {
        Groups.AddRange(((IEnumerable<RegexGroup>)match.Groups).Select(g => new Group(g)));

        Success = match.Success;
    }
}

public class Group
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

public record Capture
{
    public Capture(RegexCapture capture)
    {
        Index = capture.Index;
        Length = capture.Length;
        Value = capture.Value;
    }

    public int Index { get; }

    public int Length { get; }

    public string Value { get; }
}
