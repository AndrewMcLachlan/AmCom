import debounce from "lodash.debounce";
import React, {useEffect, useState} from "react";
import {  useDispatch } from "react-redux";

import * as actions from "../Redux/Regex/slice";

import { regexTest } from "./Service";

import RegexResult from "../Components/RegexResult";
import RegexResultSummary from "../Components/RegexResultSummary";
import TextBox from "../Components/TextBox";
import { RegexTestResponse } from "../model/regex";
import { useAppDispatch } from "../Redux/store";

//class Regex extends React.Component<RegexProps, any> {

const Regex: React.FC = () => {

    const [regex, setRegex] = useState<string>("");
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<RegexTestResponse>();

    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(regexTest({ regex, text: input })).then((r) =>
            setResult(r.payload)
        );
        
    }, [regex, input]);


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
