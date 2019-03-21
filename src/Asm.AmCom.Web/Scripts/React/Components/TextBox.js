import * as React from "react";
import { connect } from "react-redux";
class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "form-group" },
            React.createElement("label", { htmlFor: this.props.id, className: "control-label" }, this.props.label),
            React.createElement("input", { type: "text", className: "form-control", id: this.props.id, value: this.props.value })));
    }
}
function mapProps(state, ownProps) {
    return Object.assign({}, ownProps);
}
export default connect(mapProps)(TextBox);
//# sourceMappingURL=TextBox.js.map