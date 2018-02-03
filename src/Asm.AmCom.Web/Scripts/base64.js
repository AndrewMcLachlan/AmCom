var asm;
(function (asm) {
    var tools;
    (function (tools) {
        var base64;
        (function (base64) {
            var source;
            var encodeDecodeButton;
            var result;
            function encodeDecode() {
                if (!source) {
                    source = document.getElementById("source");
                    result = document.getElementById("result");
                }
                var sourceValue = source.value;
                var resultValue;
                try {
                    resultValue = b64DecodeUnicode(sourceValue);
                }
                catch (e) {
                    resultValue = b64EncodeUnicode(sourceValue);
                }
                result.value = resultValue.toString();
            }
            base64.encodeDecode = encodeDecode;
            function documentReady() {
                source = document.getElementById("source");
                encodeDecodeButton = document.getElementById("encodeDecode");
                result = document.getElementById("result");
                if (encodeDecodeButton)
                    encodeDecodeButton.addEventListener("click", encodeDecode);
            }
            base64.documentReady = documentReady;
            ;
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
        })(base64 = tools.base64 || (tools.base64 = {}));
    })(tools = asm.tools || (asm.tools = {}));
})(asm || (asm = {}));
asm.tools.base64.documentReady();
//# sourceMappingURL=Base64.js.map