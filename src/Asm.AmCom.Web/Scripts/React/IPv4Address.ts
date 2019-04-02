import { IPv4AddressWithCIDR } from "./IPv4AddressWithCIDR";

export class IPv4Address {
    private _octet1: number;
    private _octet2: number;
    private _octet3: number;
    private _octet4: number;

    get octet1(): number {
        return this._octet1;
    }
    set octet1(value: number) {
        if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
        this._octet1 = value;
    }

    get octet2(): number {
        return this._octet2;
    }
    set octet2(value: number) {
        if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
        this._octet2 = value;
    }

    get octet3(): number {
        return this._octet3;
    }
    set octet3(value: number) {
        if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
        this._octet3 = value;
    }

    get octet4(): number {
        return this._octet4;
    }
    set octet4(value: number) {
        if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
        this._octet4 = value;
    }

    constructor(octet1, octet2, octet3, octet4) {
        this.octet1 = octet1;
        this.octet2 = octet2;
        this.octet3 = octet3;
        this.octet4 = octet4;
    }

    public getAddressBytes() {
        return [this.octet1, this.octet2, this.octet3, this.octet4];
    }

    public toString = () => {
        return this.octet1 + "." + this.octet2 + "." + this.octet3 + "." + this.octet4;
    }

    public toUInt32 = () => {

        const split = this.getAddressBytes();
        let result = 0;

        for (let i = 0, j = 24; i < split.length; i++ , j -= 8) {
            result += split[i] << j;
        }

        return result;
    }

    public toCidr = (mask: IPv4Address): IPv4AddressWithCIDR => {

        let bitCheck = -2147483648;
        let reverseCheck = 1;
        const addressNumber = this.toUInt32();
        const maskNumber = mask.toUInt32();

        let cidrNumber = 0;

        for (let i = 31; i >= 0; i--) {
            if ((bitCheck & maskNumber) === bitCheck) {
                cidrNumber++;
                bitCheck >>= 1;
            }
            else {
                let reverse = 0;
                for (let j = 0; j < 32; j++) {
                    if ((reverseCheck & maskNumber) === 0) {
                        reverse++;
                        reverseCheck <<= 1;
                    }
                    else if (reverse + cidrNumber !== 32) {
                        throw new Error("Invalid mask");
                    }
                }
                break;
            }

        }

        let byteMask = -16777216;

        const maskedAddress = (addressNumber & maskNumber);

        const newIp = [];

        for (let i = 0; i < 4; i++) {
            newIp.push((maskedAddress & byteMask) >>> ((3 - i) * 8));

            byteMask >>>= 8;
        }

        return new IPv4AddressWithCIDR(newIp[0], newIp[1], newIp[2], newIp[3], cidrNumber);

    }
}
