import { ActionTypes } from './Actions'
import { regex as globalRegex,  ActionWithData } from '../global'


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

