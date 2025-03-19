"use strict";
function sanitizeInput(input) {
    return input.toUpperCase();
}
let safeInput = sanitizeInput("mayo");
console.log(safeInput);
safeInput = "meow"; // allowed - SafeInput is just an alias for string!
