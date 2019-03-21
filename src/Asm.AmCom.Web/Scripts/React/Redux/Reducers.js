import { ActionTypes } from './Actions';
export const initialState = {
    Regex: null,
    Input: null,
    isUpdating: false
};
function state(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.Updating:
            return Object.assign({}, state, { isUpdating: true });
        default:
            return state;
    }
}
export default state;
//# sourceMappingURL=Reducers.js.map