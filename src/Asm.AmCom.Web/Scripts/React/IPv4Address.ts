export class IPv4Address {
    octet1: number;
    octet2: number;
    octet3: number;
    octet4: number;

    toString = () => this.octet1 + "." + this.octet2 + "." + this.octet3 + "." + this.octet4;
}

export class IPv4AddressWithCIDR extends IPv4Address {
    mask: number;
    toString = () =>  super.toString() + "/" + this.mask;
}