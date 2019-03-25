using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using Asm.AmCom.Net;
using Xunit;

namespace Asm.AmCom.Tests
{
    public class IPAddressExtensionsTests
    {
        [Fact]
        public void ThirtyTwoBit()
        {
            IPAddress address = IPAddress.Parse("192.168.1.1");
            IPAddress mask = IPAddress.Parse("255.255.255.255");

            var result = address.ToCidrString(mask);

            Assert.Equal("192.168.1.1/32", result);
        }

        [Fact]
        public void TwentyFourBit()
        {
            IPAddress address = IPAddress.Parse("192.168.1.1");
            IPAddress mask = IPAddress.Parse("255.255.255.0");

            var result = address.ToCidrString(mask);

            Assert.Equal("192.168.1.0/24", result);
        }

        [Fact]
        public void EightBit()
        {
            IPAddress address = IPAddress.Parse("192.168.1.1");
            IPAddress mask = IPAddress.Parse("255.0.0.0");

            var result = address.ToCidrString(mask);

            Assert.Equal("192.0.0.0/8", result);
        }

        [Fact]
        public void OneBit()
        {
            IPAddress address = IPAddress.Parse("192.168.1.1");
            IPAddress mask = IPAddress.Parse("128.0.0.0");

            var result = address.ToCidrString(mask);

            Assert.Equal("128.0.0.0/1", result);
        }

        [Fact]
        public void ToUint32Test1()
        {
            IPAddress mask = IPAddress.Parse("128.0.0.0");
            var result = mask.ToUInt32();
            uint expected = 2147483648;

            Assert.Equal(expected, result);

            System.Collections.BitArray ba = new System.Collections.BitArray(new byte[] { 254 });
        }
    }
}
