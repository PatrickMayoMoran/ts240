"use strict";
// But interfaces can't alias or extend primitives!
// interface SafeSix = string; // Error!
/* interfaces can't extend primitive types like string!
interface SafeSeven extends string {
  wontWork: string;
}
*/
