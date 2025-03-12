"use strict";
function safeGet(array, index) {
    if (index < array.length)
        return array[index];
    return undefined;
}
const names = ["John", "Jane"];
const thirdName = safeGet(names, 2); // Should return undefined
const numbers = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2
