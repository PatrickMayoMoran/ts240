function isNumber(candidate: any): candidate is number {
  return typeof candidate === 'number';
}

// example 1
let x: any = "Launch School";
if (isNumber(x)) {
  const y: number = x;
  console.log(y);
}
