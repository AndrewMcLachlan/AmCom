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

    componentDidMount() {

        /*ready(() => {
            let text = document.getElementById("text") as HTMLInputElement;
            let regex = document.getElementById("regex") as HTMLInputElement;

            if (regex) regex.addEventListener("keyup", this.doTest.bind(this));
            if (text) text.addEventListener("keyup", this.doTest.bind(this));
        });*/
       // service.regexTest(this.props.regex, this.props.input);
    }

/*    doTest() {
        this.props.dispatch(service.regexTest(this.props.regex, this.props.input));
    }*/

    render() {
        return (
            <div>
                <section className="row">
                    <div className="col-md-9">
                        <fieldset>
                            <legend className="sr-only">Regular Expression Tester</legend>
                            <TextBox id="regex" label="Regular Expression" value={this.props.regex} onChange={this.props.regexChanged} />
                            <TextBox id="text" label="Input" value={this.props.input} onChange={this.props.inputChanged} />
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

function mapDispatchToProps(dispatch, ownProps) {
	return {
		regexChanged: e => {
            service.regexTest(e.target.value, this.props.input);
			dispatch(RegexTester.regexChanging(e.target.value));
		},
		inputChanged: e => {
            service.regexTest(this.props.regex, e.target.value);
			dispatch(RegexTester.inputChanging(e.target.value));
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