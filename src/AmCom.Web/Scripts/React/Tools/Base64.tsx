import React, { ChangeEvent, useState } from "react";

const Base64: React.FC<Base64Props> = (props) => {

    const [input, setInput] = useState<string>(props.input);
    const [output, setOutput] = useState<string>();

    const inputChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.currentTarget.value);

    const xCode = () => {
        let resultValue: any;
        try {
            resultValue = b64DecodeUnicode(input);
        }
        catch (e) {
            resultValue = b64EncodeUnicode(input);
        }

        setOutput(resultValue.toString());
    }

    const b64EncodeUnicode = (str: string) => {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => {
            return String.fromCharCode(+("0x" + p1));
        }));
    }

    const b64DecodeUnicode = (str: string) => {
        return decodeURIComponent(Array.prototype.map.call(atob(str), (c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    }


    return (
        <div>
            <section className="row">
                <div className="col-md-9">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="theString" className="control-label">String to encode / decode</label>
                            <textarea className="form-control" id="source" spellCheck={false} onChange={inputChanged} />
                        </div>
                        <button className="btn btn-primary mb-3" id="encodeDecode" onClick={xCode}>Encode / Decode</button>
                    </fieldset>
                </div>
            </section>

            <section className="row">
                <div className="col-md-9">
                    <div className="form-group">
                        <label htmlFor="result" className="control-label">Result</label>
                        <textarea className="form-control" id="result" spellCheck={false} value={output} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Base64;

interface Base64Props {
    input?: string;
}
