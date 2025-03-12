"use strict";
function concatenateStrings(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    return a + b;
}
function combine(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return "Both arguments must be of same type";
    }
}
const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);
combine("Tiny", "Cat");
combine(5, 7);
combine("Tiny", 16);
