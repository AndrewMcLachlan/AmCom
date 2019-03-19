"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { combineReducers } from 'redux'
var Actions = require("./Actions");
exports.initialState = {
    Regex: null,
    Input: null,
    isUpdating: false
};
function state(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case Actions.ActionTypes.Updating:
            return __assign({}, state, { isUpdating: true });
        default:
            return state;
    }
}
exports.default = state;
//# sourceMappingURL=Reducers.js.map