import * as React from "react";
import { connect } from "react-redux";
class RegexApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<span>Hello</span>);
    }
}
function mapProps(state, ownProps) {
    return Object.assign({}, ownProps, { regex: state.Regex, input: state.Input });
}
export default connect(mapProps)(RegexApp);
//# sourceMappingURL=regexapp.jsx.map