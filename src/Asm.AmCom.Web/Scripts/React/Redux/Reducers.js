import { ActionTypes } from './Actions';
export var regex;
(function (regex) {
    regex.initialState = {
        regex: null,
        input: null,
        result: null,
        isTesting: false
    };
    function reducer(state = regex.initialState, action) {
        switch (action.type) {
            case ActionTypes.RegexTester.GetTestResultRequest:
                return Object.assign({}, state, { isTesting: true });
            case ActionTypes.RegexTester.GetTestResultSuccess:
                return Object.assign({}, state, { isTesting: false, result: action.data });
            case ActionTypes.RegexTester.GetTestResultFailure:
                return Object.assign({}, state, { isTesting: false, result: null });
            case ActionTypes.RegexTester.RegexChanging:
                return Object.assign({}, state, { regex: action.data });
            case ActionTypes.RegexTester.InputChanging:
                return Object.assign({}, state, { input: action.data });
            default:
                return state;
        }
    }
    regex.reducer = reducer;
})(regex || (regex = {}));
//# sourceMappingURL=Reducers.js.map