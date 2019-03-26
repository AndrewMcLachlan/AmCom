import { Reducer } from "redux"

import * as Reducers from "../Redux/Reducers"
import Regex from "./Regex"
import Cidr from "./Cidr"

export const tools:Array<Tool> = [
    {
        name: "regex",
        initialState: Reducers.regex.initialState,
        reducer: Reducers.regex.reducer,
        component: Regex
    },
    {
        name: "cidr",
        initialState: Reducers.cidr.initialState,
        reducer: Reducers.cidr.reducer,
        component: Cidr,
    }
];

export interface Tool {
    name: string;
    initialState: any;
    reducer: Reducer;
    component: any;
}