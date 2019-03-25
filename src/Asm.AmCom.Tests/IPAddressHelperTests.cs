using System;
using System.Collections.Generic;
using System.Text;
using Asm.AmCom.Net;
using Xunit;

namespace Asm.AmCom.Tests
{
/*    Given I have a string '<IPAddress>'
	When I call GetToUnsignedInt32

    Then the value<Value> will be returned

    Examples:
    | IP Address      | Value      |
    | 255.255.255.255 | 4294967295 |
    | 255.255.255.128 | 4294967168 |*/

    public class IPAddressHelperTests
    {
        private string _ipAddress;
        private uint _result;

        public void GivenIHaveAString(string ipAddress)
        {
            _ipAddress = ipAddress;
        }

        public void WhenICallToUnsignedInt32()
        {
            _result = IPAddressHelper.ToUnsignedInt32(_ipAddress);
        }

        public void WhenICallNumberOfSetBits()
        {
            _result = BitOperators.NoOfSetBits(_result);
        }

        public void ThenTheValueWillBeReturned(uint expected)
        {
            Assert.Equal(expected, _result);
        }

        [Fact]
        public void TwoFiveFive()
        {
            GivenIHaveAString("255.255.255.255");
            WhenICallToUnsignedInt32();
            ThenTheValueWillBeReturned(UInt32.MaxValue);
        }

        [Fact]
        public void TwoFiveFiveX3Zero()
        {
            GivenIHaveAString("255.255.255.0");
            WhenICallToUnsignedInt32();
            ThenTheValueWillBeReturned(4294967040);
        }

        [Fact]
        public void NumberOfSetBitsTest1()
        {
            GivenIHaveAString("255.255.255.255");
            WhenICallToUnsignedInt32();
            WhenICallNumberOfSetBits();
            ThenTheValueWillBeReturned(32);
        }

        [Fact]
        public void NumberOfSetBitsTest2()
        {
            GivenIHaveAString("255.255.255");
            WhenICallToUnsignedInt32();
            WhenICallNumberOfSetBits();
            ThenTheValueWillBeReturned(24);
        }

    }
}
