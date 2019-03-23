import * as React from "react"
import { connect } from "react-redux"
import { regex } from "../global"

class RegexResult extends React.Component<RegexResultProps, any> {
    constructor(props) {
        super(props);
    }

    render() {

        let res = this.props.regexResult;

        if (!res) return (null);

        if (!res.success) return (<span>No Match</span>);

        let input = this.props.input || "";

        let unmatchedStart = input.substr(0, res.groups[0].index);

        let unmatchedEnd = input.substr(res.groups[0].index + res.groups[0].length);

        let style = {
            backgroundColor: 'green',
        };

        let groups = new Array<JSX.Element>();

        for (let group of res.groups) {

            let captures = new Array<JSX.Element>();

            if (group.captures && group.captures.length > 1) {

                for (let capture of group.captures) {
                    captures.push(<li>{capture.value}</li>);
                }

                groups.push(<li>{group.value}<ul>{captures}</ul></li>);
            }
            else {
                groups.push(<li>{group.value}</li>);
            }
        }

        return (<div>
            <span>{unmatchedStart}</span>
            <span style={style}>{res.groups[0].value}</span>
            <span>{unmatchedEnd}</span>
            <ul>
                {groups}
            </ul>
        </div>);
    }
}

function mapProps(state: regex.State, ownProps): RegexResultProps {
    return {
        ...ownProps,
        input: state.input,
        regexResult: state.result,
    };
}

export default connect(mapProps)(RegexResult);

interface RegexResultProps {
    input?: string;
    regexResult?: regex.RegexTestResponse;
}