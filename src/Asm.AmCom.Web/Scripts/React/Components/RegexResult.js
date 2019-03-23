import * as React from "react";
import { connect } from "react-redux";
class RegexResult extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let res = this.props.regexResult;
        if (!res)
            return (null);
        if (!res.success)
            return (React.createElement("span", null, "No Match"));
        let input = this.props.input || "";
        let unmatchedStart = input.substr(0, res.groups[0].index);
        let unmatchedEnd = input.substr(res.groups[0].index + res.groups[0].length);
        let style = {
            backgroundColor: 'green',
        };
        let groups = new Array();
        for (let group of res.groups) {
            let captures = new Array();
            if (group.captures && group.captures.length > 1) {
                for (let capture of group.captures) {
                    captures.push(React.createElement("li", null, capture.value));
                }
                groups.push(React.createElement("li", null,
                    group.value,
                    React.createElement("ul", null, captures)));
            }
            else {
                groups.push(React.createElement("li", null, group.value));
            }
        }
        return (React.createElement("div", null,
            React.createElement("span", null, unmatchedStart),
            React.createElement("span", { style: style }, res.groups[0].value),
            React.createElement("span", null, unmatchedEnd),
            React.createElement("ul", null, groups)));
    }
}
function mapProps(state, ownProps) {
    return Object.assign({}, ownProps, { input: state.input, regexResult: state.result });
}
export default connect(mapProps)(RegexResult);
//# sourceMappingURL=RegexResult.js.map