import { Reducer } from "redux";

import * as Reducers from "../Redux/Reducers";
import Regex from "./Regex";
import Cidr from "./Cidr";
import Base64 from "./Base64";

export const tools:Tool[] = [
    {
        component: Regex,
        initialState: Reducers.regex.initialState,
        name: "regex",
        reducer: Reducers.regex.reducer,
    },
    {
        component: Cidr,
        initialState: Reducers.cidr.initialState,
        name: "cidr",
        reducer: Reducers.cidr.reducer,
    },
    {
        component: Base64,
        initialState: {},
        name: "base64",
        reducer: () => {},
    },
];

export interface Tool {
    name: string;
    initialState: any;
    reducer: Reducer;
    component: any;
}
