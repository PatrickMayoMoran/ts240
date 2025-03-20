function randomFunction({ length }: Array<number>): number {
  return length;
}

console.log(randomFunction([1, 2, 3, 4, 5]));

function details({ profession, pay }: {profession: string, pay: number}): string {
  return `My friend is a ${profession} and makes ${pay}`;
}

type Buddy = {
  name: string;
  profession: string;
  pay: number;
}

let joey: Buddy = {
  name: "Joe",
  profession: "Medic",
  pay: 54000,
}

console.log(details(joey));
console.log(details({profession: "Doctor", pay: 300000}));
