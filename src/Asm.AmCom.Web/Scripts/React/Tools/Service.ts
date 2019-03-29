import * as redux from "redux"

import { regex, cidr, Action } from '../global'

import * as Actions from "../Redux/Actions"
import { IPv4Address } from "../IPv4Address";

export namespace service {

    export function regexTest(regex: string, input: string) {
        return async (dispatch:redux.Dispatch<Action>) => {

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
                    regexResult.input = input;

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

    export function cidrTest(ipAddress: IPv4Address, subnetMask: IPv4Address) {
        return async (dispatch: redux.Dispatch<Action>) => {

            dispatch(Actions.CidrNotation.getCidrRequest());

            try {
                let response = await fetch(`/tools/api/cidr?ipaddress=${ipAddress.toString()}&subnetmask=${subnetMask.toString()}`, {
                    method: "GET",
                    headers: new Headers({
                        "Accept": "application/json"
                    }),
                });

                if (response.ok) {
                    let result: cidr.CidrResponse = await response.json();

                    dispatch(Actions.CidrNotation.getCidrSuccess(result));
                }
                else {
                    dispatch(Actions.CidrNotation.getCidrFailure(response.status));
                }
            }
            catch (e) {
                dispatch(Actions.CidrNotation.getCidrFailure(e));
            }
        }
    }
}