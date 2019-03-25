import * as React from "react"
import { connect } from "react-redux"
import { regex } from "../global"

class RegexResultSummary extends React.Component<RegexResultProps, any> {
    constructor(props) {
        super(props);
    }

    render() {

        let res = this.props.regexResult;

        if (!res) return (null);

        if (!res.success) return (<span className="nomatch">No Match</span>);

        let input = res.input || "";

        let unmatchedStart = input.substr(0, res.groups[0].index);

        let unmatchedEnd = input.substr(res.groups[0].index + res.groups[0].length);

        return (<div>
            <span>{unmatchedStart}</span>
            <span className="match">{res.groups[0].value}</span>
            <span>{unmatchedEnd}</span>
        </div>);
    }
}

function mapProps(state: regex.State, ownProps): RegexResultProps {
    return {
        ...ownProps,
        regexResult: state.result,
    };
}

export default connect(mapProps)(RegexResultSummary);

interface RegexResultProps {
    regexResult?: regex.RegexTestResponse;
}