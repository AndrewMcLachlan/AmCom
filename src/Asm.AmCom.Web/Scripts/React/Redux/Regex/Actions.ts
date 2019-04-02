import { dataAction, simpleAction } from "../../Core";
import { Action } from "../../global";
import * as ActionTypes from "./ActionTypes";

export const getTestResultRequest = (): Action => simpleAction(ActionTypes.GetTestResultRequest);
export const getTestResultSuccess = (data): Action => dataAction(ActionTypes.GetTestResultSuccess, data);
export const getTestResultFailure = (data): Action => dataAction(ActionTypes.GetTestResultFailure, data);

export const regexChanging = (data): Action => dataAction(ActionTypes.RegexChanging, data);
export const regexChanged = (): Action => simpleAction(ActionTypes.RegexChanged);

export const inputChanging = (data): Action => dataAction(ActionTypes.InputChanging, data);
export const inputChanged = (): Action => simpleAction(ActionTypes.InputChanged);
