using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using RegexCapture = System.Text.RegularExpressions.Capture;
using RegexGroup = System.Text.RegularExpressions.Group;

namespace Asm.AmCom.Web.Areas.Tools.Models;

[DataContract]
public class RegexTestRequest
{
    [DataMember]
    public string Regex { get; set; }

    [DataMember]
    public string Text { get; set; }
}

public class RegexTestResponse
{
    public bool Success { get; set; }

    public List<Group> Groups { get; set; } = new List<Group>();

    public RegexTestResponse(Match match)
    {
        Groups.AddRange(((IEnumerable<RegexGroup>)match.Groups).Select(g => new Group(g)));

        Success = match.Success;
    }
}

public class Group
{
    public int Index { get; set; }

    public int Length { get; set; }

    public bool Success { get; set; }

    public string Value { get; set; }

    public List<Capture> Captures { get; set; } = new List<Capture>();

    public Group(RegexGroup group)
    {
        Captures.AddRange(group.Captures.Select(c => new Capture(c)));
        Success = group.Success;
        Index = group.Index;
        Length = group.Length;
        Value = group.Value;
    }
}

public class Capture
{
    public int Index { get; set; }

    public int Length { get; set; }

    public string Value { get; set; }

    public Capture(RegexCapture capture)
    {
        Index = capture.Index;
        Length = capture.Length;
        Value = capture.Value;
    }
}
