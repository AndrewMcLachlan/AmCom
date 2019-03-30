import { ActionTypes } from './Actions'
import { regex as globalRegex, cidr as globalCidr, ActionWithData } from '../global'

export namespace regex {
    export const initialState: globalRegex.State = {
        regex: null,
        input: null,
        result: null,
        isTesting: false
    }

    export function reducer(state = initialState, action: ActionWithData<any>): globalRegex.State {
        switch (action.type) {
            case ActionTypes.RegexTester.GetTestResultRequest:
                return {
                    ...state,
                    isTesting: true,
                };
            case ActionTypes.RegexTester.GetTestResultSuccess:
                return {
                    ...state,
                    isTesting: false,
                    result: action.data,
                };
            case ActionTypes.RegexTester.GetTestResultFailure:
                return {
                    ...state,
                    isTesting: false,
                    result: null,
                }

            case ActionTypes.RegexTester.RegexChanging:
                return {
                    ...state,
                    regex: action.data
                }

            case ActionTypes.RegexTester.InputChanging:
                return {
                    ...state,
                    input: action.data
                }
            default:
                return state;
        }
    }
}

export namespace cidr {
    export const initialState: globalCidr.State = {
        cidr: null,
        ipAddress: null,
        netMask: null,
        isGetting: false,
    }

    export function reducer(state = initialState, action: ActionWithData<any>): globalCidr.State {
        switch (action.type) {
            case ActionTypes.CidrNotation.GetCidrRequest:
                return {
                    ...state,
                    isGetting: true,
                };
            case ActionTypes.CidrNotation.GetCidrSuccess:
                return {
                    ...state,
                    isGetting: false,
                    cidr: action.data,
                };
            case ActionTypes.CidrNotation.GetCidrFailure:
                return {
                    ...state,
                    isGetting: false,
                    cidr: null,
                };
            case ActionTypes.CidrNotation.IPChanging:
                return {
                    ...state,
                    ipAddress: action.data,
                };
            case ActionTypes.CidrNotation.MaskChanging:
                return {
                    ...state,
                    netMask: action.data,
                };
            default:
                return state;
        }

    }
}
