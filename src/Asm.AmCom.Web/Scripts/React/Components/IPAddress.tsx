import * as React from "react"
import { connect } from "react-redux"
import { ControlProps } from "../global"
import { IPv4Address } from "../IPv4Address"

export default class IPaddress extends React.Component<IPAddressProps, any> {
    constructor(props) {
        super(props);
    }

    render() {

        let style = {
            width: "50px",
        };

        return (
            <fieldset className="form-group">
                <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
                <div className="form-inline">
                    <input type="number" max="255" min="0" maxLength={3} className="form-control xs" id={this.props.id + "_1"} value={this.props.value && this.props.value.octet1} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control xs" id={this.props.id + "_2"} value={this.props.value && this.props.value.octet2} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control xs" id={this.props.id + "_3"} value={this.props.value && this.props.value.octet3} />&nbsp;.&nbsp;
                    <input type="number" max="255" min="0" maxLength={3} className="form-control xs" id={this.props.id + "_4"} value={this.props.value && this.props.value.octet4} />
                </div>
            </fieldset>);
    }
}

interface IPAddressProps extends ControlProps {
    value?: IPv4Address;
}