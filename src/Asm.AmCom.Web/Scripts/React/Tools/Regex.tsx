import * as React from "react"
import { connect } from "react-redux"

import { ready } from "../core"
import { regex, DispatchProps } from "../global"

import { RegexTester } from "../Redux/Actions"

import TextBox from "../Components/TextBox"

import { service } from "./Service"
import RegexResult from "../Components/RegexResult";

class Regex extends React.Component<RegexProps, any> {
    constructor(props) {
        super(props);
    }

    regexChanged(e) {
        this.props.regexChanged(e.target.value, this.props.input);
    }

    inputChanged(e) {
        this.props.inputChanged(this.props.regex, e.target.value);
    }

    render() {
        return (
            <div>
                <section className="row">
                    <div className="col-md-9">
                        <fieldset>
                            <legend className="sr-only">Regular Expression Tester</legend>
                            <TextBox id="regex" label="Regular Expression" value={this.props.regex} onChange={this.regexChanged.bind(this)} />
                            <TextBox id="text" label="Input" value={this.props.input} onChange={this.inputChanged.bind(this)} />
                        </fieldset>
                    </div>
                </section>

                <section className="row">
                    <div className="col-md-4 regex-result">
                        Match:
                    </div>
                </section>
            </div>
        );
    }
}

function mapProps(state: regex.State, ownProps): RegexProps {
    return {
        ...ownProps,
        regex: state.regex,
        input: state.input
    };
}

function mapDispatchToProps(dispatch) {
    return {
        regexChanged: (regex, input) => {
            dispatch(service.regexTest(regex, input));
            dispatch(RegexTester.regexChanging(regex));
        },
        inputChanged: (regex,input) => {
            dispatch(service.regexTest(regex, input));
            dispatch(RegexTester.inputChanging(input));
        },
    }
}

export default connect(mapProps, mapDispatchToProps)(Regex);

interface RegexProps extends DispatchProps {
    regex?: string;
    input?: string;
    regexChanged?: Function;
    inputChanged?: Function;
}