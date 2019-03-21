import * as React from "react"
import { connect } from "react-redux"

import { State } from "./global"
import  TextBox  from "./Components/TextBox"

class RegexApp extends React.Component<RegexProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <section className="row">
                <div className="col-md-9">
                    <fieldset>
                        <legend className="sr-only">Regular Expression Tester</legend>
                        <TextBox id="regex" label="Regular Expression" value={this.props.regex} />
                        <TextBox id="text" label="Input" value={this.props.input} />
                    </fieldset>
                </div>
            </section>

            <section className="row">
                <div className="col-md-4 regex-result">
                    Match: <span id="result"></span>
                </div>
            </section>
            </div>
        );
    }
}

function mapProps(state: State, ownProps): any {
    return {
        ...ownProps,
        regex: state.Regex,
        input: state.Input
    };
}

export default connect(mapProps)(RegexApp);

interface RegexProps {
    regex?: string;
    input?: string;
}