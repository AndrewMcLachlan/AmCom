import * as React from "react"
import { connect } from "react-redux"
import { ControlProps } from "../global"
import { IPv4Address } from "../IPv4Address"

export default class IPaddress extends React.Component<IPAddressProps, any> {
    constructor(props) {
        super(props);
    }

    validateWithDotCheck = (e:React.KeyboardEvent<HTMLInputElement>) => {
        let charCode = e.charCode;
        if (charCode == 46 && e.currentTarget.value.length > 0) {
            (e.currentTarget.nextElementSibling as HTMLInputElement).focus();
            e.stopPropagation();
            e.preventDefault();
        }
        else {
            this.validate(e);
        }
    }

    validate = (e:React.KeyboardEvent<HTMLInputElement>) => {
        let charCode = e.charCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
        {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    validateMaxWithNext = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.validateMax(e);

        if (e.target.value.length == 3) {
            (e.currentTarget.nextElementSibling as HTMLInputElement).focus();
        }
    }

    validateMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        let intval = parseInt(e.currentTarget.value);
        if (intval > 255) {
            e.currentTarget.value = "255";
        }
    }

    render() {

        return (
            <fieldset className="form-group">
                <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
                <div className="form-inline ip-address">
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_1"} value={this.props.value && this.props.value.octet1} onChange={this.validateMaxWithNext} onKeyPress={this.validateWithDotCheck} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_2"} value={this.props.value && this.props.value.octet2} onChange={this.validateMaxWithNext} onKeyPress={this.validateWithDotCheck} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_3"} value={this.props.value && this.props.value.octet3} onChange={this.validateMaxWithNext} onKeyPress={this.validateWithDotCheck} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_4"} value={this.props.value && this.props.value.octet4} onChange={this.validateMax} onKeyPress={this.validate} />
                </div>
            </fieldset>);
    }
}

interface IPAddressProps extends ControlProps {
    value?: IPv4Address;
}