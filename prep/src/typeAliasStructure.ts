type SafeInput = string;

function sanitizeInput(input: string): SafeInput {
  return input.toUpperCase();
}

let safeInput: SafeInput = sanitizeInput("mayo");
console.log(safeInput);
safeInput = "meow"; // allowed - SafeInput is just an alias for string!
