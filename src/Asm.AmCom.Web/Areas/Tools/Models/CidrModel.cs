using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Asm.AmCom.Web.Areas.Tools.Models
{
    public class CidrRequest
    {
        public IPAddress IPAddress {get; set;}

        public IPAddress SubnetMask {get; set;}
    }

    public class CidrResponse
    {
        public string IPAddress {get; set;}
    }
}
