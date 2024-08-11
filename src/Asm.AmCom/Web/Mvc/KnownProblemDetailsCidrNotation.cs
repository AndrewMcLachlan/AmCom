namespace Asm.AmCom.Web.Mvc;

public static partial class KnownProblemDetails
{
    public static class CidrNotation
    {
        public static readonly ProblemDetails NullIPAddress = new()
        {
            Type = "http://www.andrewmclachlan.com/problems/cidr/null-ip",
            Title = "IPAddress must be supplied",
            Detail = "The IP address is null",
            Status = 400
        };

        public static readonly ProblemDetails NullSubnetMask = new()
        {
            Type = "http://www.andrewmclachlan.com/problems/cidr/null-mask",
            Title = "SubnetMask must be supplied",
            Detail = "The subnet mask is null",
            Status = 400
        };

        public static readonly ProblemDetails IPAddressWrongFormat = new()
        {
            Type = "http://www.andrewmclachlan.com/problems/cidr/ip-format",
            Title = "IPAddress Not IPv4",
            Detail = "The IP address is not an IPv4 address",
            Status = 400
        };

        public static readonly ProblemDetails SubnetMaskWrongFormat = new()
        {
            Type = "http://www.andrewmclachlan.com/problems/cidr/mask-format",
            Title = "SubnetMask Not IPv4",
            Detail = "The subnet mask is not an IPv4 address",
            Status = 400
        };

        public static readonly ProblemDetails InvalidSubnetMask = new()
        {
            Type = "http://www.andrewmclachlan.com/problems/cidr/inavlid-mask",
            Title = "SubnetMask is not valid",
            Detail = "The subnet mask is an IPv4 address but not valid as a subnet mask",
            Status = 400
        };
    }
}
