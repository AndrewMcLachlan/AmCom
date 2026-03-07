export interface State {
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
