import debounce from "lodash.debounce";
import * as React from "react";
import { connect } from "react-redux";

import { DispatchProps } from "../global";

import * as RegexTester from "../Redux/Regex/Actions";
import { State } from "../regex";

import { regexTest } from "./Service";

import RegexResult from "../Components/RegexResult";
import RegexResultSummary from "../Components/RegexResultSummary";
import TextBox from "../Components/TextBox";

class Regex extends React.Component<RegexProps, any> {

    private stateChangedDB: (regex, input) => void;

    constructor(props) {
        super(props);

        this.stateChangedDB = debounce(this.props.stateChanged, 250);
        this.regexChanged = this.regexChanged.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    public render() {
        return (
            <div>
                <section className="row">
                    <div className="col-md-9">
                        <fieldset>
                            <TextBox id="regex" label="Regular Expression" value={this.props.regex} onChange={this.regexChanged} />
                            <TextBox id="text" label="Input" value={this.props.input} onChange={this.inputChanged} maxLength={50} />
                        </fieldset>
                    </div>
                </section>
                <section className="row mt-3">
                    <div className="col-md-4 regex-result-summary">
                        <RegexResultSummary />
                    </div>
                </section>
                <section className="row mt-4">
                    <div className="col-md-4 regex-result">
                        <RegexResult />
                    </div>
                </section>
            </div>
        );
    }

    private regexChanged(e) {
        this.stateChangedDB(e.target.value, this.props.input);
        this.props.regexChanged(e.target.value);
    }

    private inputChanged(e) {
        this.stateChangedDB(this.props.regex, e.target.value);
        this.props.inputChanged(e.target.value);
    }
}

function mapProps(state: State, ownProps): RegexProps {
    return {
        ...ownProps,
        input: state.input,
        regex: state.regex,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputChanged: (input) => {
            dispatch(RegexTester.inputChanging(input));
        },
        regexChanged: (regex) => {
            dispatch(RegexTester.regexChanging(regex));
        },
        stateChanged: (regex, input) => {
            dispatch(regexTest(regex, input));
        },
    };
}

export default connect(mapProps, mapDispatchToProps)(Regex);

interface RegexProps extends DispatchProps {
    regex?: string;
    input?: string;
    stateChanged: (regex: string, input: string) => void;
    regexChanged?: (e) => void;
    inputChanged?: (e) => void;
}
