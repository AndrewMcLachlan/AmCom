import * as React from "react";

import { ControlProps } from "../global";
import { IPv4Address } from "../IPv4Address";

export default class IPAddress extends React.Component<IPAddressProps, IPAddressState> {
    constructor(props) {
        super(props);

        this.state = {
            octet1: this.props.value && this.props.value.octet1,
            octet2: this.props.value && this.props.value.octet2,
            octet3: this.props.value && this.props.value.octet3,
            octet4: this.props.value && this.props.value.octet4,
        };
    }

    public render() {

        return (
            <fieldset className="form-group">
                <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
                <div className="ip-address">
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_1"} name="octet1" value={this.state.octet1} onChange={this.validateMaxWithNext} onKeyDown={this.validateWithDotCheck} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_2"} name="octet2" value={this.state.octet2} onChange={this.validateMaxWithNext} onKeyDown={this.validateWithDotCheck} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_3"} name="octet3" value={this.state.octet3} onChange={this.validateMaxWithNext} onKeyDown={this.validateWithDotCheck} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control" id={this.props.id + "_4"} name="octet4" value={this.state.octet4} onChange={this.validateMax} onKeyDown={this.validate} />
                </div>
            </fieldset>
        );
    }

    private validateWithDotCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "." && e.currentTarget.value.length > 0) {
            (e.currentTarget.nextElementSibling as HTMLInputElement).focus();
            e.stopPropagation();
            e.preventDefault();
        } else {
            this.validate(e);
        }
    }

    private validate = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key.length === 1 && !"0123456789".includes(e.key)) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    private validateMaxWithNext = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.validateMax(e);

        if (e.target.value.length === 3) {
            (e.currentTarget.nextElementSibling as HTMLInputElement).focus();
        }
    }

    private validateMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const intval = parseInt(e.currentTarget.value, 10);
        if (intval > 255) {
            e.currentTarget.value = "255";
        }

        const newState: IPAddressState = {};
        newState[e.currentTarget.name] = e.currentTarget.value;
        this.setState(newState, () => {

            if (this.props.onChange) {

                if (this.state.octet1 && this.state.octet2 && this.state.octet3 && this.state.octet4) {
                    this.props.onChange(new IPv4Address(this.state.octet1, this.state.octet2, this.state.octet3, this.state.octet4));
                }
            }
        });
    }
}

interface IPAddressState {
    octet1?: number;
    octet2?: number;
    octet3?: number;
    octet4?: number;
}

interface IPAddressProps extends ControlProps {
    value?: IPv4Address;
    onChange: (e: IPv4Address) => void;
}
