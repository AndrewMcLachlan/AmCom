import { AnyAction } from "redux";

import { IPv4Address } from "./IPv4Address";

export interface State {
    ipAddress?: IPv4Address;
    netMask?: IPv4Address;
    cidr?: string;
    isGetting: boolean;
}

export interface CidrResponse {
    ipAddress?: string;
}
