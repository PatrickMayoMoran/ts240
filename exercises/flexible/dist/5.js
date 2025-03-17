"use strict";
function filterByType(arr, type) {
    return arr.filter(e => typeof e === type);
}
console.log(filterByType(["hello", "world", 42, true], "string"));
