import { IPv4Address } from "./IPv4Address";

export class IPv4AddressWithCIDR extends IPv4Address {

    public readonly mask: number;

    constructor(octet1, octet2, octet3, octet4, cidrNumber) {
        super(octet1, octet2, octet3, octet4);
        this.mask = cidrNumber;
    }

    public toString = () => {
        return this.octet1 + "." + this.octet2 + "." + this.octet3 + "." + this.octet4 + "/" + this.mask;
    }
}
