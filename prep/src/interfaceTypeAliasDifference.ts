// An interface can consist of just a primitive...
interface SafeInputOne {
  input: string;
}

// So could a type...
type SafeToo = {
  input: string;
}

// Interfaces can extend types...
interface SafeThree extends SafeToo {
  moreInput: string;
}

// Types can alias primitives...
type SafeFour = string;

// Types can union primitives... 
type SafeFive = string | number;

// But interfaces can't alias or extend primitives!
// interface SafeSix = string; // Error!
/* interfaces can't extend primitive types like string!
interface SafeSeven extends string {
  wontWork: string;
}
*/
