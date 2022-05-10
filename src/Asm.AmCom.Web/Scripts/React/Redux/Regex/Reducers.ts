import { RegexTestResponse, State } from "../../model/regex";
import { PayloadAction } from "@reduxjs/toolkit";

export const getTestResultRequest = (state: State) => {
    state.isTesting = true;
}

export const getTestResultSuccess = (state: State, action: PayloadAction<RegexTestResponse>) => {
    state.isTesting = false;
    state.result = action.payload;
}

export const getTestResultFailure  = (state: State, action: PayloadAction<number | unknown>) => {
    state.isTesting = false;
    state.result = null;
}
