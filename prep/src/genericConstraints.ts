interface Queen {
  comfiness: string;
}

interface Full {
  comfiness: string;
}

interface Stuffy {
  comfiness: string;
}

function howCozy<T extends {comfiness: string}>(mattress: T): string {
  return mattress["comfiness"];
}

let myQueen: Queen = {
  comfiness: "Over the top!",
}

let myFull: Full = {
  comfiness: "Best sleep I ever had!",
}

let myStuffy: Stuffy = {
  comfiness: "My little buddy!",
}

console.log(howCozy(myQueen));
console.log(howCozy(myFull));
console.log(howCozy(myStuffy));
// console.log(howCozy({type: "no comfy"}));
