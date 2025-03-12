function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function combine(a: number | string, b: number | string): number | string {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Both arguments must be of same type";
  }
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);

combine("Tiny", "Cat");
combine(5, 7);
combine("Tiny", 16);
