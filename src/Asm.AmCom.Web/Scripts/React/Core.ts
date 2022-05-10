import { Action, ActionWithData } from "./global";

export function ready(fn) {
    document.addEventListener("DOMContentLoaded", fn);
}

Array.prototype.selectMany = function(func) {
    const result = [];

    this.forEach((o) => result.push(func(o)));

    return result;
};

/*
export function simpleAction(type): Action {
    return {
        type,
    };
}

export function dataAction<T>(type, data): ActionWithData<T> {
    return {
        data,
        type,
    };
}
*/