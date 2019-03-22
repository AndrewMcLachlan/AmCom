import * as React from "react";
import { connect } from "react-redux";
class RegexResult extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.regexResult)
            return;
        let groups = new Array();
        for (let group of this.props.regexResult.groups) {
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
        return (React.createElement("ul", null, groups));
    }
}
function mapProps(state, ownProps) {
    return Object.assign({}, ownProps, { regexResult: state.result });
}
export default connect(mapProps)(RegexResult);
//# sourceMappingURL=RegexResult.js.map