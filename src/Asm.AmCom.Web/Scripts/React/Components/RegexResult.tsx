import * as React from "react"
import { connect } from "react-redux"
import { regex } from "../global"

class RegexResult extends React.Component<RegexResultProps, any> {
    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.regexResult) return;

        let groups = new Array<JSX.Element>();

        for (let group of this.props.regexResult.groups) {

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

        return (
            <ul>
                {groups}
            </ul>);
    }
}

function mapProps(state: regex.State, ownProps): RegexResultProps {
    return {
        ...ownProps,
        regexResult: state.result,
    };
}

export default connect(mapProps)(RegexResult);

interface RegexResultProps {
    regexResult?: regex.RegexTestResponse;
}