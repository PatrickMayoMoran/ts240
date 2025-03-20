let age: number = 30;
let undefinedLength: number = (age as unknown as string).length;
console.log(undefinedLength);
// assertion allows us to treat number as a string
// no type error from the compiler
// no runtime error
// yes, unexpected behavior - no length property on a number, so undefined
