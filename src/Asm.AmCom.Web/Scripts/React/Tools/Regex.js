import * as React from "react";
import { connect } from "react-redux";
import { RegexTester } from "../Redux/Actions";
import TextBox from "../Components/TextBox";
import { service } from "./Service";
class Regex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        /*ready(() => {
            let text = document.getElementById("text") as HTMLInputElement;
            let regex = document.getElementById("regex") as HTMLInputElement;

            if (regex) regex.addEventListener("keyup", this.doTest.bind(this));
            if (text) text.addEventListener("keyup", this.doTest.bind(this));
        });*/
        // service.regexTest(this.props.regex, this.props.input);
    }
    /*    doTest() {
            this.props.dispatch(service.regexTest(this.props.regex, this.props.input));
        }*/
    render() {
        return (React.createElement("div", null,
            React.createElement("section", { className: "row" },
                React.createElement("div", { className: "col-md-9" },
                    React.createElement("fieldset", null,
                        React.createElement("legend", { className: "sr-only" }, "Regular Expression Tester"),
                        React.createElement(TextBox, { id: "regex", label: "Regular Expression", value: this.props.regex, onChange: this.props.regexChanged }),
                        React.createElement(TextBox, { id: "text", label: "Input", value: this.props.input, onChange: this.props.inputChanged })))),
            React.createElement("section", { className: "row" },
                React.createElement("div", { className: "col-md-4 regex-result" }, "Match:"))));
    }
}
function mapProps(state, ownProps) {
    return Object.assign({}, ownProps, { regex: state.regex, input: state.input });
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        regexChanged: e => {
            service.regexTest(e.target.value, this.props.input);
            dispatch(RegexTester.regexChanging(e.target.value));
        },
        inputChanged: e => {
            service.regexTest(this.props.regex, e.target.value);
            dispatch(RegexTester.inputChanging(e.target.value));
        },
    };
}
export default connect(mapProps, mapDispatchToProps)(Regex);
//# sourceMappingURL=Regex.js.map