"use strict";
function isStringArray(candidate) {
    return (Array.isArray(candidate) && candidate.every(e => typeof e === 'string'));
}
console.log(isStringArray([1, 2, , 3])); // false
console.log(isStringArray(["test", "string"])); // true
