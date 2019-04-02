import * as React from "react";
import { connect } from "react-redux";
import { ControlProps } from "../global";

class TextBox extends React.Component<TextBoxProps, any> {
    constructor(props) {
        super(props);
    }

    public render() {

        const opts: any = {};
        let className = "form-control";

        if (this.props.readonly === true) {
            opts.readonly = "readonly";
            className = "form-control-plaintext";
        }

        return (
            <div className="form-group">
                <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
                <input type="text" maxLength={this.props.maxLength} className={className} id={this.props.id} value={this.props.value} {...opts} onChange={this.props.onChange} onKeyUp={this.props.onKeyUp} />
            </div>
        );
    }
}

function mapProps(state: any, ownProps): any {
    return {
        ...ownProps,
    };
}

export default connect(mapProps)(TextBox);

interface TextBoxProps extends ControlProps {
    value?: string;
    maxLength?: number;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
