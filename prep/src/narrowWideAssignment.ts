type StringOrBool = string | boolean;
type JustString = string;

function assignValue(item: StringOrBool): void {
  let myString: JustString;
  // myString = item; Error - StringOrBool not assignable to string
}
