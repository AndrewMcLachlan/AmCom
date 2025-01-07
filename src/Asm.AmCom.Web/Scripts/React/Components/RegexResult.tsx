import * as React from "react";
import { JSX } from "react";
import { connect } from "react-redux";
import * as regex from "../model/regex";

const RegexResult: React.FC<RegexResultProps> = (props) => {

    const res = props.regexResult;

    if (!res || !res.success || res.groups.length === 1) return (null);

    const groups = new Array<JSX.Element>();

    const hover = (e: React.MouseEvent) => {
        const target = document.getElementById(e.currentTarget.getAttribute("data-highlight"));
        if (!target) return;
        target.classList.add("hover");
    }

    const unhover = (e: React.MouseEvent) => {
        const target = document.getElementById(e.currentTarget.getAttribute("data-highlight"));
        if (!target) return;
        target.classList.remove("hover");
    }

    // Skip the first group as we already display it
    for (const group of res.groups.slice(1)) {

        if (!group.success || group.captures.length === 0) continue;

        const captures = new Array<JSX.Element>();

        const gIndex = res.groups.indexOf(group);

        if (group.captures && group.captures.length > 1) {

            for (const capture of group.captures) {
                captures.push(<li data-highlight={`capture_${gIndex}_${group.captures.indexOf(capture)}`} onMouseOver={hover} onMouseOut={unhover}>{capture.value}</li>);
            }

            groups.push(<tr data-highlight={`group_${gIndex}`} onMouseOver={hover} onMouseOut={unhover}><td>{res.groups.indexOf(group)}</td><td>{group.value}</td><td><ul>{captures}</ul></td></tr>);
        }
        else {
            groups.push(<tr data-highlight={`group_${gIndex}`} onMouseOver={hover} onMouseOut={unhover}><td>{res.groups.indexOf(group)}</td><td>{group.value}</td><td /></tr>);
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

interface RegexResultProps {
    regexResult?: regex.RegexTestResponse;
}

export default RegexResult;