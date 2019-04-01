import * as React from "react"

export default class Base64 extends React.Component<Base64Props, Base64State> {

    stateChangedDB: Function;

    constructor(props) {
        super(props);

        this.state = {
            input: props.input,
        };
    }

    xCode = (e) => {
        let resultValue;
        try {
            resultValue = this.b64DecodeUnicode(this.state.input);
        }
        catch (e) {
            resultValue = this.b64EncodeUnicode(this.state.input);
        }

        this.setState({ output: resultValue.toString() });
    }

    b64EncodeUnicode = (str) => {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_, p1) {
            return String.fromCharCode(+('0x' + p1));
        }));
    }

    b64DecodeUnicode = (str) => {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    render() {

        return (
            <div>
                <section className="row">
                    <div className="col-md-9">
                        <fieldset>
                            <legend className="sr-only">Base 64 Encode / Decode</legend>
                            <div className="form-group">
                                <label htmlFor="theString" className="control-label">String to encode / decode</label>
                                <textarea className="form-control" id="source" spellCheck={false} onChange={(e) => this.setState({input: e.currentTarget.value})}></textarea>
                            </div>
                            <button className="btn btn-primary mb-3" id="encodeDecode" onClick={this.xCode}>Encode / Decode</button>
                        </fieldset>
                    </div>
                </section>

                <section className="row">
                    <div className="col-md-9">
                        <div className="form-group">
                            <label htmlFor="result" className="control-label">Result</label>
                            <textarea className="form-control" id="result" spellCheck={false} value={this.state.output}></textarea>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

interface Base64Props {
    input?: string;
}

interface Base64State {
    input?: string;
    output?: string;
}