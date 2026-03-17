import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Base64 from "../Tools/Base64";

const appElement = document.getElementById("app");
const root = ReactDOM.createRoot(appElement);
root.render(<Base64 />);
