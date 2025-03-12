type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal = Elephant | Tiger | Peacock;

function describeAnimal(animal: Animal): string {
  switch (animal.kind) {
    case "elephant":
      return `An elephant weighs ${animal.weight} kilograms.`;
    case "tiger":
      return `A tiger can run ${animal.speed} kilometers per hour.`;
    case "peacock":
      return `A peacock's feathers are ${animal.featherLength} meters long.`;
    default:
      const _exhaustiveCheck: never = animal;
      throw new Error(`Invalid animal ${JSON.stringify(_exhaustiveCheck)}`);
  }
}
