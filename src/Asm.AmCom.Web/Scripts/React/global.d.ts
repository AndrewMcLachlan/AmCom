declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

export interface State {
    Regex?: string;
    Input?: string;
    isUpdating: boolean;
}