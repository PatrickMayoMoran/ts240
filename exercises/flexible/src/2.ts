function printId(id: number | string): void {
  if (typeof id === 'string') {
    console.log("Your id is a string");
  } else if (typeof id === 'number') {
    console.log("Your id is a number");
  }
}

printId(55);
printId("Home");
