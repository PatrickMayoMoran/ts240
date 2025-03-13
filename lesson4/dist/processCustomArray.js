"use strict";
const customArray = ["apple", 42, "banana"];
function processCustomArray(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(e => typeof e === 'string');
    }
    else {
        return [];
    }
}
processCustomArray(customArray);
processCustomArray("kitty Kat");
