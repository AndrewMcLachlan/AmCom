import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Regex from "../Tools/Regex";

const appElement = document.getElementById("app");
const root = ReactDOM.createRoot(appElement);
root.render(
    <Provider store={store}>
        <Regex />
    </Provider>
);
