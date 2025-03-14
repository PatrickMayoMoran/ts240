"use strict";
function processData(data) {
    if (typeof data === 'string') {
        return `Hello, ${data}`;
    }
    else if (typeof data === 'number') {
        return `Age: ${data}`;
    }
    else {
        throw new Error("Invalid Data");
    }
}
// Usage
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"
