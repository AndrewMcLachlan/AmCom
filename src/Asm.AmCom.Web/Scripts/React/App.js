import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
//import thunk from "redux-thunk"
import reducer from "./Redux/Reducers";
import { initialState } from "./Redux/Reducers";
//import { loadState, saveState } from "./LocalStorage"
import Regex from "./regexapp";
class App extends React.Component {
    //settings: Settings;
    constructor(props) {
        super(props);
        const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        this.store = createStore(reducer, initialState);
    }
    render() {
        return (React.createElement(Provider, { store: this.store },
            React.createElement(Regex, null)));
    }
}
//var settings: Settings = null;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=App.js.map