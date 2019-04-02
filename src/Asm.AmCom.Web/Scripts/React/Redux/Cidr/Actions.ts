import { dataAction, simpleAction } from "../../Core";
import { Action } from "../../global";
import * as ActionTypes from "./ActionTypes";

export const getCidrRequest = (): Action => simpleAction(ActionTypes.GetCidrRequest);
export const getCidrSuccess = (data): Action => dataAction(ActionTypes.GetCidrSuccess, data);
export const getCidrFailure = (data): Action => dataAction(ActionTypes.GetCidrFailure, data);

export const ipChanging = (data): Action => dataAction(ActionTypes.IPChanging, data);
export const maskChanging = (data): Action => dataAction(ActionTypes.MaskChanging, data);
