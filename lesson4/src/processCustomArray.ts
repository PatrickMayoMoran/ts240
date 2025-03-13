type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray | unknown): Array<string> {
  if (Array.isArray(arr)) {
    return arr.filter(e => typeof e === 'string');
  } else {
    return [];
  }
}

processCustomArray(customArray);
processCustomArray("kitty Kat");
