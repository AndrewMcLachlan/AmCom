import classNames from "classnames";
import * as React from "react";

const TextBox: React.FC<TextBoxProps> = ({className, label, ...props}) => {

        className = classNames(className, props.readOnly === true ? "form-control-plaintext" : "form-control");

        return (
            <div className="form-group">
                <label htmlFor={props.id} className="control-label">{label}</label>
                <input type="text" className={className} {...props} />
            </div>
        );
}

export default TextBox;

export interface TextBoxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
}
