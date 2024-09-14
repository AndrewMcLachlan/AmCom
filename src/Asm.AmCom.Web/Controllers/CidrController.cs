using Asm.AmCom.Web.Models;
using Asm.AmCom.Web.Mvc;
using System.Net;

namespace Asm.AmCom.Web.Controllers;

[Area("Tools")]
[Route("tools")]
[ApiController]
public class CidrController : Controller
{
    [Route("api/cidr")]
    [HttpGet]
    public ActionResult<CidrResponse> Get([FromQuery]string ipAddress, [FromQuery]string subnetMask)
    {
        if (String.IsNullOrWhiteSpace(ipAddress)) return BadRequest(KnownProblemDetails.CidrNotation.NullIPAddress);
        if (String.IsNullOrWhiteSpace(subnetMask)) return BadRequest(KnownProblemDetails.CidrNotation.NullSubnetMask);
        if (!IPAddress.TryParse(ipAddress, out IPAddress? ip)) return BadRequest(KnownProblemDetails.CidrNotation.IPAddressWrongFormat);
        if (!IPAddress.TryParse(subnetMask, out IPAddress? mask)) return BadRequest(KnownProblemDetails.CidrNotation.IPAddressWrongFormat);
        if (ip.AddressFamily != System.Net.Sockets.AddressFamily.InterNetwork) return BadRequest(KnownProblemDetails.CidrNotation.IPAddressWrongFormat);
        if (mask.AddressFamily != System.Net.Sockets.AddressFamily.InterNetwork) return BadRequest(KnownProblemDetails.CidrNotation.SubnetMaskWrongFormat);

        try
        {
            return Ok(new CidrResponse { IPAddress = ip.ToCidrString(mask) });
        }
        catch(FormatException)
        {
            return BadRequest(KnownProblemDetails.CidrNotation.InvalidSubnetMask);
        }
    }
}
