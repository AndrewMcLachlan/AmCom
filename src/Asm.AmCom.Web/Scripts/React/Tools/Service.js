var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as Actions from "../Redux/Actions";
export var service;
(function (service) {
    function regexTest(regex, input) {
        return (dispatch) => __awaiter(this, void 0, void 0, function* () {
            dispatch(Actions.RegexTester.getTestResultRequest());
            let request = {
                regex: regex,
                text: input
            };
            try {
                let response = yield fetch("/tools/api/regex", {
                    method: "POST",
                    body: JSON.stringify(request),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }),
                });
                if (response.ok) {
                    let regexResult = yield response.json();
                    dispatch(Actions.RegexTester.getTestResultSuccess(regexResult));
                }
                else {
                    dispatch(Actions.RegexTester.getTestResultFailure(response.status));
                }
            }
            catch (e) {
                dispatch(Actions.RegexTester.getTestResultFailure(e));
            }
        });
    }
    service.regexTest = regexTest;
})(service || (service = {}));
//# sourceMappingURL=Service.js.map