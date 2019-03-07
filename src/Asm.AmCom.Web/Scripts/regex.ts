namespace asm.tools.regex {

    var text: HTMLInputElement;
    var regex: HTMLInputElement;
    var result: HTMLSpanElement;

    async function checkRegex() {

        try {
            let response = await fetch("/tools/api/regex", {
                method: "POST",
                body: JSON.stringify({ Regex: regex.value, Text: text.value }),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }),
            });

            if (response.ok) {
                let regexResult = await response.json();

                result.innerHTML = regexResult.success ? "Match" : "No Match";
                result.removeClass();
                result.addClass(regexResult.success ? "match" : "nomatch");
            }
        }
        catch (e) {
        }
    }

    export function documentReady() {

        text = document.getElementById("text") as HTMLInputElement;
        regex = document.getElementById("regex") as HTMLInputElement;
        result = document.getElementById("result") as HTMLSpanElement;

        if (regex) regex.addEventListener("keyup", checkRegex);
        if (text) text.addEventListener("keyup", checkRegex);
    }

    HTMLElement.prototype.addClass = function (className: string) {

        if (this.className === "") {
            this.className = className;
            return;
        }

        let currentClass: string = this.className;

        let classList = currentClass.split(" ");

        if (classList.indexOf(className) === -1) {
            this.className += ` ${className}`;
        }
    }

    HTMLElement.prototype.removeClass = function (className?: string) {

        if (!className) {
            this.className = "";
            return;
        }

        let currentClass: string = this.className;

        let classList = currentClass.split(" ");

        return classList.filter((c) => c !== className).join(" ");
    }
}

asm.tools.regex.documentReady();

interface HTMLElement {
    addClass(className: string);
    removeClass(className?: string);
}

interface Promise<T> {
    constructor;
}