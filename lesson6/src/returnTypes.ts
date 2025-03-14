function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersFunction = typeof addNumbers;
type AddNumbersParams = Parameters<AddNumbersFunction>
type AddNumbersReturnType = ReturnType<AddNumbersFunction>;
