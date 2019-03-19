//import { combineReducers } from 'redux'
import * as Actions from './Actions'
import { ActionTypes } from './Actions'
import { State } from '../global'


export const initialState: State = {
    Regex: null,
    Input: null,
    isUpdating: false
}

function state(state = initialState, action: Actions.Action): State {
    switch (action.type) {
        case Actions.ActionTypes.Updating:
            return {
                ...state,
                isUpdating: true
            };
        default:
            return state;
    }
}

export default state;