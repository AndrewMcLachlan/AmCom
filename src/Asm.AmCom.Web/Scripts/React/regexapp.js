import * as React from "react";
import { connect } from "react-redux";
import TextBox from "./Components/TextBox";
class RegexApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("section", { className: "row" },
                React.createElement("div", { className: "col-md-9" },
                    React.createElement("fieldset", null,
                        React.createElement("legend", { className: "sr-only" }, "Regular Expression Tester"),
                        React.createElement(TextBox, { id: "regex", label: "Regular Expression", value: this.props.regex }),
                        React.createElement(TextBox, { id: "text", label: "Input", value: this.props.input })))),
            React.createElement("section", { className: "row" },
                React.createElement("div", { className: "col-md-4 regex-result" },
                    "Match: ",
                    React.createElement("span", { id: "result" })))));
    }
}
function mapProps(state, ownProps) {
    return Object.assign({}, ownProps, { regex: state.Regex, input: state.Input });
}
export default connect(mapProps)(RegexApp);
//# sourceMappingURL=regexapp.js.map