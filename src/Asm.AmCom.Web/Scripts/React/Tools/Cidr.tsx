import * as React from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";

import { cidr, DispatchProps } from "../global";

import { CidrNotation } from "../Redux/Actions";

import IPAddress from "../Components/IPAddress";
import TextBox from "../Components/TextBox";

import { IPv4Address } from "../IPv4Address";


class Cidr extends React.Component<CidrProps, any> {

    private stateChangedDB: Function;

    constructor(props) {
        super(props);

        this.stateChangedDB = debounce(this.props.stateChanged, 250);
    }

    private ipChanged(e: IPv4Address) {
        this.stateChangedDB(e, this.props.netMask);
        this.props.ipChanged(e);
    }

    private maskChanged(e: IPv4Address) {
        this.stateChangedDB(this.props.ipAddress, e);
        this.props.maskChanged(e);
    }

    public render() {

        let result = null;

        if (this.props.cidr) {
            result = <TextBox id="result" value={this.props.cidr} readonly={true} label="CIDR Notation" />;
        }

        return (
            <div>
                <section className="row">
                    <div className="col-md-9">
                        <fieldset>
                            <legend className="sr-only">CIDR Notation Converter</legend>
                            <IPAddress id="address" label="IP Address" value={this.props.ipAddress} onChange={this.ipChanged.bind(this)} />
                            <IPAddress id="mask" label="Subnet Mask" value={this.props.netMask} onChange={this.maskChanged.bind(this)} />
                        </fieldset>
                    </div>
                </section>

                <section className="row">
                    <div className="col-md-4 cidr-result">
                        {result}
                    </div>
                </section>
            </div>
        );
    }
}

function mapProps(state: cidr.State, ownProps): CidrProps {
    return {
        ...ownProps,
        cidr: state.cidr,
        ipAddress: state.ipAddress,
        netMask: state.netMask,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stateChanged: (ip: IPv4Address, mask: IPv4Address) => {
            if (ip === null || mask === null) return;
            let cidr = (ip).toCidr(mask).toString();
            dispatch(CidrNotation.getCidrSuccess(cidr));
        },
        ipChanged: (ip) => {
            dispatch(CidrNotation.ipChanging(ip))
        },
        maskChanged: (mask) => {
            dispatch(CidrNotation.maskChanging(mask));
        },
    }
}

export default connect(mapProps, mapDispatchToProps)(Cidr);

interface CidrProps extends DispatchProps {
    ipAddress?: IPv4Address;
    netMask?: IPv4Address;
    cidr?: string;
    stateChanged: Function;
    ipChanged: Function;
    maskChanged: Function;
}