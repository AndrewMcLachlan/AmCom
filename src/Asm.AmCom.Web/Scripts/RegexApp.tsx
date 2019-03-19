import * as React from "react"
import { connect } from "react-redux"
import {State } from "./global"

class RegexApp extends React.Component<RegexProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (<span>Hello</span>);
    }
}

function mapProps(state: State, ownProps): any {
    return {
        ...ownProps,
        regex: state.Regex,
        input: state.Input
    };
}

export default connect(mapProps)(RegexApp);

interface RegexProps {
    regex?: string;
    input?: string;
}