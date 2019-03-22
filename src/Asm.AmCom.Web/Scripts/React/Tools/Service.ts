import * as redux from "redux"

import { regex } from '../global'

import * as Actions from "../Redux/Actions"

export namespace service {

    export function regexTest(regex: string, input: string) {
        return async (dispatch:redux.Dispatch<Actions.Action>) => {

            dispatch(Actions.RegexTester.getTestResultRequest());

            let request: regex.RegexTestRequest = {
                regex: regex,
                text: input
            };

            try {
                let response = await fetch("/tools/api/regex", {
                    method: "POST",
                    body: JSON.stringify(request),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }),
                });

                if (response.ok) {
                    let regexResult: regex.RegexTestResponse = await response.json();

                    dispatch(Actions.RegexTester.getTestResultSuccess(regexResult));
                }
                else {
                    dispatch(Actions.RegexTester.getTestResultFailure(response.status));
                }
            }
            catch (e) {
                dispatch(Actions.RegexTester.getTestResultFailure(e));
            }
        }
    }
}