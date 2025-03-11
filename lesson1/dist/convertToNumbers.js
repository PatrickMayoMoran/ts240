"use strict";
const numbersInStringFormat = ["10", "20", "30", "40"];
function convertToNumbers(arr) {
    // Your implementation here
    return arr.map(n => parseInt(n, 10));
}
console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
