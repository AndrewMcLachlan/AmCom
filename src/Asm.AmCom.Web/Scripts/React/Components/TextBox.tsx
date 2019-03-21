import * as React from "react"
import { connect } from "react-redux"
import { State } from "../global"

class TextBox extends React.Component<TextBoxProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
                <input type="text" className="form-control" id={this.props.id} value={this.props.value} />
            </div>);
    }
}

function mapProps(state: State, ownProps): any {
    return {
        ...ownProps,
    };
}

export default connect(mapProps)(TextBox);

interface TextBoxProps {
    id: string;
    label: string;
    value?: string;
}