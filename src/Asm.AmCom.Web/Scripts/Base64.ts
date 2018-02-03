namespace asm.tools.base64 {

    var source: HTMLTextAreaElement;
    var encodeDecodeButton: HTMLButtonElement;
    var result: HTMLTextAreaElement;

    export function encodeDecode() {

        if (!source) {
            source = document.getElementById("source") as HTMLTextAreaElement;
            result = document.getElementById("result") as HTMLTextAreaElement;
        }

        let sourceValue = source.value;
        let resultValue;
        try {
            resultValue = b64DecodeUnicode(sourceValue);
        }
        catch (e) {
            resultValue = b64EncodeUnicode(sourceValue);
        }

        result.value = resultValue.toString();
    }

    export function documentReady() {

        source = document.getElementById("source") as HTMLTextAreaElement;
        encodeDecodeButton = document.getElementById("encodeDecode") as HTMLButtonElement;
        result = document.getElementById("result") as HTMLTextAreaElement;

        if (encodeDecodeButton) encodeDecodeButton.addEventListener("click", encodeDecode);
    };

    function b64EncodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode(+('0x' + p1));
        }));
    }

    function b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

}

asm.tools.base64.documentReady();