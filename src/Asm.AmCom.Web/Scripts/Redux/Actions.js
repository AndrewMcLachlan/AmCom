"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes.Updating = "Updating";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
function simpleAction(type) {
    return {
        type: type
    };
}
function dataAction(type, data) {
    return {
        type: type,
        data: data
    };
}
var RegexTester;
(function (RegexTester) {
    RegexTester.updating = function () { return simpleAction(ActionTypes.Updating); };
    //    export const selectedProjectGroupsChanged = (data): ActionWithData<Octopus.ProjectGroup[]> => dataAction(ActionTypes.Customise.SelectedProjectGroupsChanged, data);
    //      export const selectedEnvironmentsChanged = (data): ActionWithData<Octopus.Environment[]> => dataAction(ActionTypes.Customise.SelectedEnvironmentsChanged, data);
})(RegexTester = exports.RegexTester || (exports.RegexTester = {}));
//# sourceMappingURL=Actions.js.map