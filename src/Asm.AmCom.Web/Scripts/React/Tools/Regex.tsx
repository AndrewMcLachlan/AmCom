import * as React from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";

import { DispatchProps, regex } from "../global";

import { RegexTester } from "../Redux/Actions";

import TextBox from "../Components/TextBox";

import { service } from "./Service";
import RegexResult from "../Components/RegexResult";
import RegexResultSummary from "../Components/RegexResultSummary";

class Regex extends React.Component<RegexProps, any> {

    private stateChangedDB: (regex, input) => void;

    constructor(props) {
        super(props);

        this.stateChangedDB = debounce(this.props.stateChanged, 250);
    }

    public render() {
        return (
            <div>
                <section className="row">
                    <div className="col-md-9">
                        <fieldset>
                            <legend className="sr-only">Regular Expression Tester</legend>
                            <TextBox id="regex" label="Regular Expression" value={this.props.regex} onChange={this.regexChanged.bind(this)} />
                            <TextBox id="text" label="Input" value={this.props.input} onChange={this.inputChanged.bind(this)} maxLength={50} />
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

function mapProps(state: regex.State, ownProps): RegexProps {
    return {
        ...ownProps,
        regex: state.regex,
        input: state.input,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputChanged: (input) => {
            dispatch(RegexTester.inputChanging(input));
        },
        regexChanged: (regex) => {
            dispatch(RegexTester.regexChanging(regex))
        },
        stateChanged: (regex, input) => {
            dispatch(service.regexTest(regex, input));
        },
    };
}

export default connect(mapProps, mapDispatchToProps)(Regex);

interface RegexProps extends DispatchProps {
    regex?: string;
    input?: string;
    stateChanged: (regex:string, input:string) => void;
    regexChanged?: (e) => void;
    inputChanged?: (e) => void;
}
