function toUpperCaseArray(arr: string[]): string[] {
  return arr.map((e: string) => e.toUpperCase());
}

console.log(toUpperCaseArray(['hello', 'world']));
