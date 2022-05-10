﻿import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import { tools } from "./Tools/Tool";

const App: React.FC<AppProps> = (props) => {

    const possibleTool = tools.find((t) => t.name === props.tool);

    if (!possibleTool) {
        throw Error(`Unknown tool: ${props.tool}`);
    }

    const tool = possibleTool;

    //const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    //const store = createStore<any, Action, any, any>(this.tool.reducer, this.tool.initialState, enhancedCompose(applyMiddleware(thunk)));

    const EntryPoint = tool.component;

    return (
        <Provider store={store}>
            <EntryPoint />
        </Provider>
    );
}

interface AppProps {
    tool: string;
}

const appElement = document.getElementById("app");
const tool = appElement.getAttribute("data-tool") || "regex";
const root = ReactDOM.createRoot(appElement);
root.render(<App tool={tool} />);
