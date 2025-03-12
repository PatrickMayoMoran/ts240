"use strict";
function isNumber(candidate) {
    return typeof candidate === 'number';
}
// example 1
let x = "Launch School";
if (isNumber(x)) {
    const y = x;
    console.log(y);
}
