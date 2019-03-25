import * as React from "react"
import { connect } from "react-redux"

class TextBox extends React.Component<TextBoxProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
                <input type="text" maxLength={this.props.maxLength} className="form-control" id={this.props.id} value={this.props.value} onChange={this.props.onChange} onKeyUp={this.props.onKeyUp} />
            </div>);
    }
}

function mapProps(state: any, ownProps): any {
    return {
        ...ownProps,
    };
}

export default connect(mapProps)(TextBox);

interface TextBoxProps {
    id: string;
    label: string;
    value?: string;
    maxLength?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}