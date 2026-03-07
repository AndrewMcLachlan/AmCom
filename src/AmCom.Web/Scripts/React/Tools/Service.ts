
import { RegexTestRequest, RegexTestResponse, State } from "../model/regex";
import * as regexActions from "../Redux/Regex/slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../Redux/store";

export const regexTest = createAsyncThunk<RegexTestResponse, RegexTestRequest, { state: RootState }>(
    "/tools/api/regex",
    async (request, { dispatch }) => {

        dispatch(regexActions.getTestResultRequest());

        if (!request.regex || !request.text || request.regex === "" || request.text === "") return null;

        try {
            const response = await fetch("/tools/api/regex", {
                body: JSON.stringify(request),
                headers: new Headers({
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }),
                method: "POST",
            });

            if (response.ok) {
                const regexResult: RegexTestResponse = await response.json();
                regexResult.input = request.text;

                dispatch(regexActions.getTestResultSuccess(regexResult));
                return regexResult;
            }
            else {
                dispatch(regexActions.getTestResultFailure(response.status));
                return null;
            }
        }
        catch (e) {
            dispatch(regexActions.getTestResultFailure(e));
            return null;
        }
    });
