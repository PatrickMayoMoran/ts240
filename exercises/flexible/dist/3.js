"use strict";
function firstElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    else {
        return arr[0];
    }
}
console.log(firstElement([7, 9, 11]));
console.log(firstElement([]));
