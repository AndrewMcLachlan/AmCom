import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { regex, Action } from "./global";
import { tools, Tool } from "./Tools/Tool";

class App extends React.Component<AppProps, any> {

    private store: Store<regex.State>;
    private tool: Tool;

    constructor(props: AppProps) {
        super(props);

        let tool = tools.find((tool) => tool.name === props.tool);

        if (!tool) {
            throw Error("Unknown tool");
        }

        this.tool = tool;

        const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore<any, Action, any, any>(this.tool.reducer, this.tool.initialState, enhancedCompose(applyMiddleware(thunk)));
    }

    public render() {

        let EntryPoint = this.tool.component;

        return (
            <Provider store={this.store}>
                <EntryPoint />
            </Provider>);
    }
}

interface AppProps {
    tool: string;
}

let appElement = document.getElementById("app");
let tool = appElement.getAttribute("data-tool") || "regex";
ReactDOM.render(<App tool={tool} />, appElement);
