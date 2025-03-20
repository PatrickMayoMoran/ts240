function pair<T>(one: T, two: T): T[] {
  return [one, two];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]

const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
