import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, Store, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { regex, Action } from "./global"

import { tools, Tool } from "./Tools/Tool"

class App extends React.Component<AppProps, any> {

    store: Store<regex.State>;
    tool: Tool;

    constructor(props:AppProps) {
        super(props);

        this.tool = tools.find((tool) => tool.name == props.tool);

        if (!this.tool) {
            throw Error("Unknown tool");
        }

        const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore<any, Action, any, any>(this.tool.reducer, this.tool.initialState, enhancedCompose(applyMiddleware(thunk)));
    }

    render() {

        let EntryPoint = this.tool.component;

        return (<Provider store={this.store}>
            <EntryPoint />
        </Provider>);
    }
}

interface AppProps {
    tool: string;
}

var appElement = document.getElementById('app');
var tool = appElement.getAttribute("data-tool") || "regex";
ReactDOM.render(<App tool={tool} />, appElement);