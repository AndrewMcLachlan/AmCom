using System;
using System.Linq;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace Asm.AmCom.Net
{
    public static class IPAddressHelper
    {
        public static uint ToUnsignedInt32(string ipAddress)
        {
            if (ipAddress == null) throw new ArgumentNullException(nameof(ipAddress));
            if (!System.Net.IPAddress.TryParse(ipAddress, out IPAddress parsedIp) || parsedIp.AddressFamily == System.Net.Sockets.AddressFamily.InterNetworkV6)
            {
                throw new ArgumentException("Not a valid IPv4 Address", nameof(ipAddress));
            }

            var split = ipAddress.Split(".").Select(i => UInt32.Parse(i)).ToArray();
            uint result = 0;

            for(int i = 0, j = 24; i < split.Length; i++, j-=8)
            {
                result += split[i] << j;
            }

            return result;
        }
    }
}
