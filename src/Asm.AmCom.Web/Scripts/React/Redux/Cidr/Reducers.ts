import { AnyAction } from "redux";

import { ActionWithData } from "../../global";
import * as ActionTypes from "./ActionTypes";

import { State } from "../../cidr";

export const initialState: State = {
    cidr: null,
    ipAddress: null,
    isGetting: false,
    netMask: null,
};

export function reducer(state = initialState, action: AnyAction | ActionWithData<any>): State {
    switch (action.type) {
        case ActionTypes.GetCidrRequest:
            return {
                ...state,
                isGetting: true,
            };
        case ActionTypes.GetCidrSuccess:
            return {
                ...state,
                cidr: action.data,
                isGetting: false,
            };
        case ActionTypes.GetCidrFailure:
            return {
                ...state,
                cidr: null,
                isGetting: false,
            };
        case ActionTypes.IPChanging:
            return {
                ...state,
                ipAddress: action.data,
            };
        case ActionTypes.MaskChanging:
            return {
                ...state,
                netMask: action.data,
            };
        default:
            return state;
    }
}
