import { AnyAction } from "redux";

import * as ActionTypes from "./ActionTypes";

import { ActionWithData } from "../../global";

import { State } from "../../regex";

export const initialState: State = {
    input: null,
    isTesting: false,
    regex: null,
    result: null,
};

export function reducer(state = initialState, action: AnyAction | ActionWithData<any>): State {
    switch (action.type) {
        case ActionTypes.GetTestResultRequest:
            return {
                ...state,
                isTesting: true,
            };
        case ActionTypes.GetTestResultSuccess:
            return {
                ...state,
                isTesting: false,
                result: action.data,
            };
        case ActionTypes.GetTestResultFailure:
            return {
                ...state,
                isTesting: false,
                result: null,
            };

        case ActionTypes.RegexChanging:
            return {
                ...state,
                regex: action.data,
            };

        case ActionTypes.InputChanging:
            return {
                ...state,
                input: action.data,
            };
        default:
            return state;
    }
}
