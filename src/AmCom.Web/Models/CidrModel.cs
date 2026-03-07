using System.Net;

namespace Asm.AmCom.Web.Models;

public record CidrRequest
{
    public required IPAddress IPAddress { get; init; }

    public required IPAddress SubnetMask { get; init; }
}

public record CidrResponse
{
    public required string IPAddress { get; init; }
}
