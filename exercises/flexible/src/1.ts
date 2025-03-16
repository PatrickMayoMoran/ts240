function wrapInArray(primitive: string | number): Array<string | number> {
  return [primitive];
};

let hello: Array<string | number> = wrapInArray("Meow");
let oneHundred: Array<number | string> = wrapInArray(100);
