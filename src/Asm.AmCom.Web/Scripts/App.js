"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
//import thunk from "redux-thunk"
var Reducers_1 = require("./Redux/Reducers");
var Reducers_2 = require("./Redux/Reducers");
//import { loadState, saveState } from "./LocalStorage"
var regexapp_1 = require("./regexapp");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    //settings: Settings;
    function App(props) {
        var _this = _super.call(this, props) || this;
        var enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
        _this.store = redux_1.createStore(Reducers_1.default, Reducers_2.initialState);
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, { store: this.store },
            React.createElement(regexapp_1.default, null)));
    };
    return App;
}(React.Component));
//var settings: Settings = null;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=App.js.map