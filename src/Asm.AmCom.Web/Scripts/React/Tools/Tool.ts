import { Reducer } from "redux";

import * as CidrReducer from "../Redux/Cidr/Reducers";
import * as RegexReducer from "../Redux/Regex/Reducers";

import Base64 from "./Base64";
import Cidr from "./Cidr";
import Regex from "./Regex";

export const tools: Tool[] = [
    {
        component: Regex,
        initialState: RegexReducer.initialState,
        name: "regex",
        reducer: RegexReducer.reducer,
    },
    {
        component: Cidr,
        initialState: CidrReducer.initialState,
        name: "cidr",
        reducer: CidrReducer.reducer,
    },
    {
        component: Base64,
        initialState: {},
        name: "base64",
        reducer: (state) => state,
    },
];

export interface Tool {
    name: string;
    initialState: any;
    reducer: Reducer;
    component: any;
}
