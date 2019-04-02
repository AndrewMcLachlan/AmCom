import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore, Store } from "redux";
import thunk from "redux-thunk";

import { Action } from "./global";
import { Tool, tools } from "./Tools/Tool";

class App extends React.Component<AppProps, any> {

    private store: Store<any>;
    private tool: Tool;

    constructor(props: AppProps) {
        super(props);

        const possibleTool = tools.find((t) => t.name === props.tool);

        if (!possibleTool) {
            throw Error(`Unknown tool: ${possibleTool.name}`);
        }

        this.tool = possibleTool;

        const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore<any, Action, any, any>(this.tool.reducer, this.tool.initialState, enhancedCompose(applyMiddleware(thunk)));
    }

    public render() {

        const EntryPoint = this.tool.component;

        return (
            <Provider store={this.store}>
                <EntryPoint />
            </Provider>
        );
    }
}

interface AppProps {
    tool: string;
}

const appElement = document.getElementById("app");
const tool = appElement.getAttribute("data-tool") || "regex";
ReactDOM.render(<App tool={tool} />, appElement);
