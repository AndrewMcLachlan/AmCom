import { AnyAction } from "redux";

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