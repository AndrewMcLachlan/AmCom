export namespace ActionTypes {
    export const Updating = "Updating";
}

function simpleAction(type): Action {
    return {
        type: type
    };
}

function dataAction<T>(type, data): ActionWithData<T> {
    return {
        type,
        data
    }
}

export namespace RegexTester {
    export const updating = (): Action => simpleAction(ActionTypes.Updating);

//    export const selectedProjectGroupsChanged = (data): ActionWithData<Octopus.ProjectGroup[]> => dataAction(ActionTypes.Customise.SelectedProjectGroupsChanged, data);
  //      export const selectedEnvironmentsChanged = (data): ActionWithData<Octopus.Environment[]> => dataAction(ActionTypes.Customise.SelectedEnvironmentsChanged, data);
}

export interface Action {
    type: string;
}

export interface ActionWithData<T> extends Action {
    data: T;
}