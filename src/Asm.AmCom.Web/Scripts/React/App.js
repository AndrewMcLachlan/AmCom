import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tools } from "./Tools/Tool";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.tool = tools.find((tool) => tool.name == props.tool);
        if (!this.tool) {
            throw Error("Unknown tool");
        }
        const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        this.store = createStore(this.tool.reducer, this.tool.initialState, enhancedCompose(applyMiddleware(thunk)));
    }
    render() {
        let EntryPoint = this.tool.component;
        return (React.createElement(Provider, { store: this.store },
            React.createElement(EntryPoint, null)));
    }
}
var appElement = document.getElementById('app');
var tool = appElement.getAttribute("data-tool") || "regex";
ReactDOM.render(React.createElement(App, { tool: tool }), appElement);
//# sourceMappingURL=App.js.map