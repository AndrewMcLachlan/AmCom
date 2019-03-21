export var ActionTypes;
(function (ActionTypes) {
    ActionTypes.Updating = "Updating";
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
    RegexTester.updating = () => simpleAction(ActionTypes.Updating);
    //    export const selectedProjectGroupsChanged = (data): ActionWithData<Octopus.ProjectGroup[]> => dataAction(ActionTypes.Customise.SelectedProjectGroupsChanged, data);
    //      export const selectedEnvironmentsChanged = (data): ActionWithData<Octopus.Environment[]> => dataAction(ActionTypes.Customise.SelectedEnvironmentsChanged, data);
})(RegexTester || (RegexTester = {}));
//# sourceMappingURL=Actions.js.map