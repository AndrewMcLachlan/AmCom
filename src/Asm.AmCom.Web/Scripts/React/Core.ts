
export function ready(fn) {
    document.addEventListener('DOMContentLoaded', fn);
}

Array.prototype.selectMany = function (func) {
    let result = [];

    this.forEach((o) => result.push(func(o)));

    return result;
}