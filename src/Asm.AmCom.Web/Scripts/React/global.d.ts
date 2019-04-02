import { AnyAction } from "redux";
import { IPv4Address, IPv4AddressWithCIDR } from "./IPv4Address";

declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }

    interface Array<T> {
        selectMany(func: (o: T) => Array<any>): Array<any>;
    }
}

export interface DispatchProps {
    dispatch?: Function;
}

export interface Action extends AnyAction {
}

export interface ActionWithData<T> extends Action {
    data: T;
}

export interface ControlProps {
    id: string;
    label?: string;
}

export namespace regex {
    export interface State {
        regex?: string;
        input?: string;
        result?: RegexTestResponse;
        isTesting: boolean;
    }

    export interface RegexTestRequest {
        regex?: string;
        text?: string;
    }

    export interface RegexTestResponse {
        input?: string;
        success?: boolean;
        groups?: Array<Group>;
    }

    export interface Group {
        index?: number;
        length?: number;
        success?: boolean;
        value?: string;
        captures?: Array<Capture>;

    }

    export interface Capture {
        index?: number;
        length?: number;
        value?: string;
    }
}

export namespace cidr {
    export interface State {
        ipAddress?: IPv4Address;
        netMask?: IPv4Address;
        cidr?: string;
        isGetting: boolean;
    }

    export interface CidrResponse {
        ipAddress?: string;
    }
}