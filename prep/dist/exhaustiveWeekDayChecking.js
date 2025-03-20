"use strict";
function hiDay(day) {
    switch (day.day) {
        case "Monday":
            console.log("It's Monday!");
            break;
        case "Tuesday":
            console.log("It's Tuesday!");
            break;
        case "Wednesday":
            console.log("It's Wednesday!");
            break;
        case "Thursday":
            console.log("It's Thursday!");
            break;
        case "Friday":
            console.log("It's Friday!");
            break;
        case "Saturday":
            console.log("It's Saturday!");
            break;
        default:
        // without checking for Sunday, error!
        // type Sunday not assignable to type never
        // const _exhaustiveCheck: never = day;
        // return _exhaustiveCheck;
    }
}
