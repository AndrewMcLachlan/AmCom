import * as redux from "redux"

export namespace ActionTypes {

    export namespace RegexTester {
        export const GetTestResultRequest = "GetTestResultRequest";
        export const GetTestResultSuccess = "GetTestResultSuccess";
        export const GetTestResultFailure = "GetTestResultFailure";

        export const RegexChanging = "RegexChanging";
        export const RegexChanged = "RegexChanged";

        export const InputChanging = "InputChanging";
        export const InputChanged = "InputChanged";
    }
}

function simpleAction(type): Action {
    return {
        type: type
    };
}

function dataAction<T>(type, data): ActionWithData<T> {
    return {
        type,
        data
    }
}

export namespace RegexTester {
    export const getTestResultRequest = (): Action => simpleAction(ActionTypes.RegexTester.GetTestResultRequest);
    export const getTestResultSuccess = (data): Action => dataAction(ActionTypes.RegexTester.GetTestResultSuccess, data);
    export const getTestResultFailure = (data): Action => dataAction(ActionTypes.RegexTester.GetTestResultFailure, data);

    export const regexChanging = (data): Action => dataAction(ActionTypes.RegexTester.RegexChanging, data);
    export const regexChanged = (): Action => simpleAction(ActionTypes.RegexTester.RegexChanged);

    export const inputChanging = (data): Action => dataAction(ActionTypes.RegexTester.InputChanging, data);
    export const inputChanged = (): Action => simpleAction(ActionTypes.RegexTester.InputChanged);
}

export interface Action extends redux.Action<string> {
}

export interface ActionWithData<T> extends Action {
    data: T;
}