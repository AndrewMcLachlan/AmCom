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
    regexChanged(e) {
        this.props.regexChanged(e.target.value, this.props.input);
    }
    inputChanged(e) {
        this.props.inputChanged(this.props.regex, e.target.value);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("section", { className: "row" },
                React.createElement("div", { className: "col-md-9" },
                    React.createElement("fieldset", null,
                        React.createElement("legend", { className: "sr-only" }, "Regular Expression Tester"),
                        React.createElement(TextBox, { id: "regex", label: "Regular Expression", value: this.props.regex, onChange: this.regexChanged.bind(this) }),
                        React.createElement(TextBox, { id: "text", label: "Input", value: this.props.input, onChange: this.inputChanged.bind(this) })))),
            React.createElement("section", { className: "row" },
                React.createElement("div", { className: "col-md-4 regex-result" }, "Match:"))));
    }
}
function mapProps(state, ownProps) {
    return Object.assign({}, ownProps, { regex: state.regex, input: state.input });
}
function mapDispatchToProps(dispatch) {
    return {
        regexChanged: (regex, input) => {
            dispatch(service.regexTest(regex, input));
            dispatch(RegexTester.regexChanging(regex));
        },
        inputChanged: (regex, input) => {
            dispatch(service.regexTest(regex, input));
            dispatch(RegexTester.inputChanging(input));
        },
    };
}
export default connect(mapProps, mapDispatchToProps)(Regex);
//# sourceMappingURL=Regex.js.map