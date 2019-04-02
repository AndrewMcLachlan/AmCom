import * as React from "react";
import { connect } from "react-redux";
import * as regex from "../regex";

class RegexResult extends React.Component<RegexResultProps, any> {
    constructor(props) {
        super(props);
    }

    public render() {

        const res = this.props.regexResult;

        if (!res || !res.success || res.groups.length === 1) return (null);

        const groups = new Array<JSX.Element>();

        // Skip the first group as we already display it
        for (const group of res.groups.slice(1)) {

            const captures = new Array<JSX.Element>();

            const gIndex = res.groups.indexOf(group);

            if (group.captures && group.captures.length > 1) {

                for (const capture of group.captures) {
                    captures.push(<li data-highlight={`capture_${gIndex}_${group.captures.indexOf(capture)}`} onMouseOver={this.hover} onMouseOut={this.unhover}>{capture.value}</li>);
                }

                groups.push(<tr data-highlight={`group_${gIndex}`} onMouseOver={this.hover} onMouseOut={this.unhover}><td>{res.groups.indexOf(group)}</td><td>{group.value}</td><td><ul>{captures}</ul></td></tr>);
            }
            else {
                groups.push(<tr data-highlight={`group_${gIndex}`} onMouseOver={this.hover} onMouseOut={this.unhover}><td>{res.groups.indexOf(group)}</td><td>{group.value}</td><td /></tr>);
            }
        }

        return (
            <div>
                <h3>Groups</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Match</th>
                            <th>Captures</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups}
                    </tbody>
                </table>
            </div>
        );
    }

    private hover = (e: React.MouseEvent) => {
        const target = document.getElementById(e.currentTarget.getAttribute("data-highlight"));

        target.classList.add("hover");
    }

    private unhover = (e: React.MouseEvent) => {
        const target = document.getElementById(e.currentTarget.getAttribute("data-highlight"));

        target.classList.remove("hover");
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
