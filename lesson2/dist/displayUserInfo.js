"use strict";
function displayUserInfo(userInfo) {
    let email = userInfo.email ? userInfo.email : "N/A";
    let age = userInfo.age ? userInfo.age : "unknown";
    return `${userInfo.name} has an email of ${email} and an age of ${age}`;
}
let patrick = { name: 'Patrick', age: 31 };
console.log(displayUserInfo(patrick));
