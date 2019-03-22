export var ActionTypes;
(function (ActionTypes) {
    let RegexTester;
    (function (RegexTester) {
        RegexTester.GetTestResultRequest = "GetTestResultRequest";
        RegexTester.GetTestResultSuccess = "GetTestResultSuccess";
        RegexTester.GetTestResultFailure = "GetTestResultFailure";
        RegexTester.RegexChanging = "RegexChanging";
        RegexTester.RegexChanged = "RegexChanged";
        RegexTester.InputChanging = "InputChanging";
        RegexTester.InputChanged = "InputChanged";
    })(RegexTester = ActionTypes.RegexTester || (ActionTypes.RegexTester = {}));
})(ActionTypes || (ActionTypes = {}));
function simpleAction(type) {
    return {
        type: type
    };
}
function dataAction(type, data) {
    return {
        type,
        data
    };
}
export var RegexTester;
(function (RegexTester) {
    RegexTester.getTestResultRequest = () => simpleAction(ActionTypes.RegexTester.GetTestResultRequest);
    RegexTester.getTestResultSuccess = (data) => dataAction(ActionTypes.RegexTester.GetTestResultSuccess, data);
    RegexTester.getTestResultFailure = (data) => dataAction(ActionTypes.RegexTester.GetTestResultFailure, data);
    RegexTester.regexChanging = (data) => dataAction(ActionTypes.RegexTester.RegexChanging, data);
    RegexTester.regexChanged = () => simpleAction(ActionTypes.RegexTester.RegexChanged);
    RegexTester.inputChanging = (data) => dataAction(ActionTypes.RegexTester.InputChanging, data);
    RegexTester.inputChanged = () => simpleAction(ActionTypes.RegexTester.InputChanged);
})(RegexTester || (RegexTester = {}));
//# sourceMappingURL=Actions.js.map