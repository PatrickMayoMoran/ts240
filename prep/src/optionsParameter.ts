type BicycleOptions = {
  frameSize?: string;
  style?: string;
}

function describeBike(
  color: string,
  options: BicycleOptions = {},
): string {
  const frameSize = options.frameSize ?? "large";
  const style = options.style ?? "hybrid";
  return `This is a ${color} ${style} bike in size ${frameSize}`;
}

console.log(describeBike("maroon", {frameSize: "XL"}));
