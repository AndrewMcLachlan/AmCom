import debounce from "lodash.debounce";
import * as React from "react";
import { connect } from "react-redux";

import { DispatchProps } from "../global";
import { IPv4Address } from "../IPv4Address";

import { State } from "../cidr";
import * as CidrNotation from "../Redux/Cidr/Actions";

import IPAddress from "../Components/IPAddress";
import TextBox from "../Components/TextBox";

class Cidr extends React.Component<CidrProps, any> {

    private stateChangedDB: (ip: IPv4Address, mask: IPv4Address) => void;

    constructor(props) {
        super(props);

        this.stateChangedDB = debounce(this.props.stateChanged, 250);

        this.ipChanged = this.ipChanged.bind(this);
        this.maskChanged = this.maskChanged.bind(this);
    }

    public render() {

        let result = null;

        if (this.props.cidr) {
            result = <TextBox id="result" className="clickable" value={this.props.cidr} readOnly={true} label="CIDR Notation" onClick={(e: React.MouseEvent<HTMLInputElement>) =>  navigator.clipboard.writeText(e.currentTarget.value)} />;
        }

        return (
            <>
                <section className="row">
                    <div className="col">
                        <fieldset>
                            <IPAddress id="address" label="IP Address" value={this.props.ipAddress} onChange={this.ipChanged} />
                            <IPAddress id="mask" label="Subnet Mask" value={this.props.netMask} onChange={this.maskChanged} />
                        </fieldset>
                    </div>
                </section>
                <section className="row">
                    <div className="col cidr-result ">
                        {result}
                    </div>
                </section>
            </>
        );
    }

    private ipChanged(e: IPv4Address) {
        this.stateChangedDB(e, this.props.netMask);
        this.props.ipChanged(e);
    }

    private maskChanged(e: IPv4Address) {
        this.stateChangedDB(this.props.ipAddress, e);
        this.props.maskChanged(e);
    }
}

function mapProps(state: State, ownProps): CidrProps {
    return {
        ...ownProps,
        cidr: state.cidr,
        ipAddress: state.ipAddress,
        netMask: state.netMask,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ipChanged: (ip) => {
            dispatch(CidrNotation.ipChanging(ip));
        },
        maskChanged: (mask) => {
            dispatch(CidrNotation.maskChanging(mask));
        },
        stateChanged: (ip: IPv4Address, mask: IPv4Address) => {
            if (ip === null || mask === null) return;
            const cidr = (ip).toCidr(mask).toString();
            dispatch(CidrNotation.getCidrSuccess(cidr));
        },
    };
}

export default connect(mapProps, mapDispatchToProps)(Cidr);

interface CidrProps extends DispatchProps {
    cidr?: string;
    ipAddress?: IPv4Address;
    netMask?: IPv4Address;
    ipChanged: (e) => void;
    maskChanged: (e) => void;
    stateChanged: (ip: IPv4Address, mask: IPv4Address) => void;
}
