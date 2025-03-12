function isNumber(candidate: any): boolean {
  return typeof candidate === 'number';
}

// example 1
let x: any = "Launch School";
if (isNumber(x)) {
  const y: number = x;
  console.log(y);
}
