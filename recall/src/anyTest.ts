let meow: any;
meow = "Tiny Cat";

// because meow is any type, the type checker does not check that it's a
// string and block its assignment to something that should be a number
let onlyNums: number = meow;
