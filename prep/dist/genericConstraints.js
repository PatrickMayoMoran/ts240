"use strict";
function howCozy(mattress) {
    return mattress["comfiness"];
}
let myQueen = {
    comfiness: "Over the top!",
};
let myFull = {
    comfiness: "Best sleep I ever had!",
};
let myStuffy = {
    comfiness: "My little buddy!",
};
console.log(howCozy(myQueen));
console.log(howCozy(myFull));
console.log(howCozy(myStuffy));
console.log(howCozy({ type: "no comfy" }));
