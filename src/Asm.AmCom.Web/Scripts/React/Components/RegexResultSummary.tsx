import * as React from "react";
import { connect } from "react-redux";
import * as regex from "../regex";

class RegexResultSummary extends React.Component<RegexResultProps, any> {
    constructor(props) {
        super(props);
    }

    public render() {

        const res = this.props.regexResult;

        if (!res) return (null);

        if (!res.success) return (<span className="nomatch">No Match</span>);

        const input = res.input || "";

        const unmatchedStart = input.substr(0, res.groups[0].index);

        const unmatchedEnd = input.substr(res.groups[0].index + res.groups[0].length);

        const groups = [];

        let pos = unmatchedStart.length;

        for (const group of res.groups.slice(1)) {

            if (!group.success || group.captures.length === 0 || group.captures[0].index < pos) continue;

            const ungrouped = input.substring(pos, group.captures[0].index);
            if (ungrouped.length > 0) {
                groups.push(<span>{ungrouped}</span>);
                pos += ungrouped.length;
            }

            const captures = [];

            const gIndex = res.groups.indexOf(group);

            for (const capture of group.captures) {

                const uncaptured = input.substring(pos, capture.index);

                if (uncaptured.length > 0) {
                    captures.push(<span>{uncaptured}</span>);
                }

                captures.push(<span id={"capture_" + gIndex + "_" + group.captures.indexOf(capture)}>{capture.value}</span>);
                pos = capture.index + capture.length;
            }

            groups.push(<span id={"group_" + gIndex}>{captures}</span>);
        }

        if (pos < input.length) {
            const ungrouped = input.substring(pos, input.length - unmatchedEnd.length);
            if (ungrouped.length > 0) {
                groups.push(<span>{ungrouped}</span>);
            }
        }

        return (
            <div>
                <span className="nonmatch start">{unmatchedStart}</span>
                <span className="match">{groups}</span>
                <span className="nonmatch end">{unmatchedEnd}</span>
            </div>
        );
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
