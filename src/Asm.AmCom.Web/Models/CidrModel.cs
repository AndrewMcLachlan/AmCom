using System.Net;

namespace Asm.AmCom.Web.Models;

public class CidrRequest
{
    public IPAddress IPAddress {get; set;}

    public IPAddress SubnetMask {get; set;}
}

public class CidrResponse
{
    public string IPAddress {get; set;}
}
