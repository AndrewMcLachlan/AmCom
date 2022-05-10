import React from "react";

import { DispatchProps } from "../global";
import { IPv4Address, IPv4AddressWithCIDR } from "../IPv4Address";

import IPAddress from "../Components/IPAddress";
import TextBox from "../Components/TextBox";
import { useEffect, useState } from "react";

const Cidr: React.FC<CidrProps> = (props) => {

    const [ipAddress, setIPAddress] = useState(props.ipAddress);
    const [netMask, setNetMask] = useState(props.netMask);
    const [cidr, setCidr] = useState<IPv4AddressWithCIDR>();

    const ipChanged = (e: IPv4Address) => {
        setIPAddress(e);
    }

    const maskChanged = (e: IPv4Address) => {
        setNetMask(e);
    }

    useEffect(() => {
            setIPAddress(props.ipAddress);
            setNetMask(props.netMask);
    }, [props.ipAddress, props.netMask]);

    useEffect(() => {
        if (!ipAddress || !netMask) return;
        setCidr(ipAddress.toCidr(netMask));
    }, [ipAddress, netMask]);
    
    let result = null;

    if (cidr) {
        result = <TextBox id="result" className="clickable" value={cidr.toString()} readOnly={true} label="CIDR Notation" onClick={(e: React.MouseEvent<HTMLInputElement>) => navigator.clipboard.writeText(e.currentTarget.value)} />;
    }

    return (
        <>
            <section className="row">
                <div className="col">
                    <fieldset>
                        <IPAddress id="address" label="IP Address" value={ipAddress} onChange={ipChanged} />
                        <IPAddress id="mask" label="Subnet Mask" value={netMask} onChange={maskChanged} />
                    </fieldset>
                </div>
            </section>
            <section className="row">
                <div className="col cidr-result">
                    {result}
                </div>
            </section>
        </>
    );

}

export default Cidr;

interface CidrProps extends DispatchProps {
    cidr?: string;
    ipAddress?: IPv4Address;
    netMask?: IPv4Address;
    ipChanged: (e) => void;
    maskChanged: (e) => void;
    stateChanged: (ip: IPv4Address, mask: IPv4Address) => void;
}
