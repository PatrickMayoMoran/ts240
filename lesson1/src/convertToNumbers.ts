const numbersInStringFormat: string[] = ["10", "20", "30", "40"];

function convertToNumbers(arr: string[]): number[] {
  // Your implementation here
  return arr.map(n => parseInt(n, 10));
}

console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
