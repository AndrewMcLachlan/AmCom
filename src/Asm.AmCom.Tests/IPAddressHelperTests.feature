Feature: IPAddressHelperTests

@Unit
Scenario Outline: Get IP address as an unsigned integer
	Given I have a string '<IPAddress>'
	When I call GetToUnsignedInt32
	Then the value <Value> will be returned

    Examples:
    | IP Address      | Value      |
    | 255.255.255.255 | 4294967295 |
    | 255.255.255.128 | 4294967168 |
