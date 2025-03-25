"use strict";
function describeBike(color, options = {}) {
    var _a, _b;
    const frameSize = (_a = options.frameSize) !== null && _a !== void 0 ? _a : "large";
    const style = (_b = options.style) !== null && _b !== void 0 ? _b : "hybrid";
    return `This is a ${color} ${style} bike in size ${frameSize}`;
}
console.log(describeBike("maroon", { frameSize: "XL" }));
