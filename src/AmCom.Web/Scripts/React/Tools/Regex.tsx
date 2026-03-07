import { useDebounce } from "use-debounce";
import React, { useEffect, useMemo, useState } from "react";

import { regexTest } from "./Service";

import RegexResult from "../Components/RegexResult";
import RegexResultSummary from "../Components/RegexResultSummary";
import TextBox from "../Components/TextBox";
import { RegexTestResponse } from "../model/regex";
import { useAppDispatch } from "../Redux/store";

const Regex: React.FC = () => {

    const [regex, setRegex] = useState<string>("");
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<RegexTestResponse>();

    const dispatch = useAppDispatch();

    const [debouncedRegex] = useDebounce(regex, 250);
    const [debouncedInput] = useDebounce(input, 250);

    useEffect(() => {
        sendRequest(regex, input);
    }, [debouncedRegex, debouncedInput]);

    const sendRequest = async (regex: string, text: string) => {
        const result = await dispatch(regexTest({ regex, text }))
        setResult(result.payload);
    };

    return (
        <div>
            <section className="row">
                <div className="col-md-9">
                    <fieldset>
                        <TextBox id="regex" label="Regular Expression" value={regex} onChange={(e) => setRegex(e.currentTarget.value)} />
                        <TextBox id="text" label="Input" value={input} onChange={(e) => setInput(e.currentTarget.value)} />
                    </fieldset>
                </div>
            </section>
            <section className="row mt-3">
                <div className="col-md-4 regex-result-summary">
                    <RegexResultSummary regexResult={result} />
                </div>
            </section>
            <section className="row mt-4">
                <div className="col-md-4 regex-result">
                    <RegexResult regexResult={result} />
                </div>
            </section>
        </div>
    );
}

export default Regex;
