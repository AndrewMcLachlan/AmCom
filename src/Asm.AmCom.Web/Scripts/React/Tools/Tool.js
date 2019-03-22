import * as Reducers from "../Redux/Reducers";
import Regex from "./Regex";
export const tools = [
    {
        name: "regex",
        initialState: Reducers.regex.initialState,
        reducer: Reducers.regex.reducer,
        component: Regex
    }
];
//# sourceMappingURL=Tool.js.map