declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

export interface DispatchProps {
    dispatch?: Function;
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