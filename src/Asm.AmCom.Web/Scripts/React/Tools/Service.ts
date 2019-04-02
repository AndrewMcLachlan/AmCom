import * as redux from "redux";

import { Action } from "../global";

import { CidrResponse } from "../cidr";
import { RegexTestRequest, RegexTestResponse } from "../regex";

import * as CidrNotation from "../Redux/Cidr/Actions";
import * as RegexTester from "../Redux/Regex/Actions";

import { IPv4Address } from "../IPv4Address";

export function regexTest(regex: string, input: string) {
    return async (dispatch: redux.Dispatch<Action>) => {

        dispatch(RegexTester.getTestResultRequest());

        const request: RegexTestRequest = {
            regex,
            text: input,
        };

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
                regexResult.input = input;

                dispatch(RegexTester.getTestResultSuccess(regexResult));
            }
            else {
                dispatch(RegexTester.getTestResultFailure(response.status));
            }
        }
        catch (e) {
            dispatch(RegexTester.getTestResultFailure(e));
        }
    };
}

export function cidrTest(ipAddress: IPv4Address, subnetMask: IPv4Address) {
    return async (dispatch: redux.Dispatch<Action>) => {

        dispatch(CidrNotation.getCidrRequest());

        try {
            const response = await fetch(`/tools/api/cidr?ipaddress=${ipAddress.toString()}&subnetmask=${subnetMask.toString()}`, {
                headers: new Headers({
                    Accept: "application/json",
                }),
                method: "GET",
            });

            if (response.ok) {
                const result: CidrResponse = await response.json();

                dispatch(CidrNotation.getCidrSuccess(result));
            }
            else {
                dispatch(CidrNotation.getCidrFailure(response.status));
            }
        }
        catch (e) {
            dispatch(CidrNotation.getCidrFailure(e));
        }
    };
}
