import * as React from "react"
import { connect } from "react-redux"
import debounce from "lodash.debounce"

import { cidr, DispatchProps } from "../global"

//import { CidrTester } from "../Redux/Actions"

//import TextBox from "../Components/TextBox"

import { service } from "./Service"
import IPAddress from "../Components/IPAddress"
import { IPv4Address, IPv4AddressWithCIDR } from "../IPv4Address";

class Cidr extends React.Component<CidrProps, any> {

    stateChangedDB: Function;

    constructor(props) {
        super(props);

        //this.stateChangedDB = debounce(this.props.stateChanged, 250);
    }

    CidrChanged(e) {
       /* this.stateChangedDB(e.target.value, this.props.input);
        this.props.CidrChanged(e.target.value);*/
    };

    inputChanged(e) {
        /*this.stateChangedDB(this.props.Cidr, e.target.value);
        this.props.inputChanged(e.target.value);*/
    };

    render() {
        return (
            <div>
                <section className="row">
                    <div className="col-md-9">
                        <fieldset>
                            <legend className="sr-only">Regular Expression Tester</legend>
                            <IPAddress id="address" label="IP Address" value={this.props.ipAddress} />
                            <IPAddress id="mask" label="Subnet Mask" value={this.props.netMask} />
                        </fieldset>
                    </div>
                </section>

                <section className="row">
                    <div className="col-md-4 cidr-result">
                        <span>{this.props.cidr}</span>
                    </div>
                </section>
            </div>
        );
    }
}

function mapProps(state: cidr.State, ownProps): CidrProps {
    return {
        ...ownProps,
        ipAddress: state.ipAddress,
        netMask: state.netMask,
        cidr: state.cidr,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        /*stateChanged: (Cidr, input) => {
            dispatch(service.CidrTest(Cidr, input));
        },
        CidrChanged: (Cidr) => {
            dispatch(CidrTester.CidrChanging(Cidr))
        },
        inputChanged: (input) => {
            dispatch(CidrTester.inputChanging(input));
        },*/
    }
}

export default connect(mapProps, mapDispatchToProps)(Cidr);

interface CidrProps extends DispatchProps {
    ipAddress?: IPv4Address;
    netMask?: IPv4Address;
    cidr?: IPv4AddressWithCIDR;
}