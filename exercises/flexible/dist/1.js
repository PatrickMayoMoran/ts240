"use strict";
function wrapInArray(primitive) {
    return [primitive];
}
;
let hello = wrapInArray("Meow");
let oneHundred = wrapInArray(100);
