//import { combineReducers } from 'redux'
import * as Actions from './Actions';
export const initialState = {
    Regex: null,
    Input: null,
    isUpdating: false
};
function state(state = initialState, action) {
    switch (action.type) {
        case Actions.ActionTypes.Updating:
            return Object.assign({}, state, { isUpdating: true });
        default:
            return state;
    }
}
export default state;
//# sourceMappingURL=Reducers.js.map