import { Reducer } from "redux"

import * as Reducers from "../Redux/Reducers"
import Regex from "./Regex"

export const tools:Array<Tool> = [
    {
        name: "regex",
        initialState: Reducers.regex.initialState,
        reducer: Reducers.regex.reducer,
        component: Regex
    }
];

export interface Tool {
    name: string;
    initialState: any;
    reducer: Reducer;
    component: any;
}