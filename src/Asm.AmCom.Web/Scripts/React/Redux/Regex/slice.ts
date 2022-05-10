import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { State } from "../../model/regex";

export const initialState: State = {
    isTesting: false,
    result: null,
};

const regexSlice = createSlice({
    name: "regex",
    initialState: initialState,
    reducers: {
        ...reducers,
    },
});

export const { getTestResultRequest, getTestResultSuccess, getTestResultFailure } = regexSlice.actions;

export default regexSlice.reducer;