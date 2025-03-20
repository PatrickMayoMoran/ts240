interface Monday {
  day: "Monday";
}
interface Tuesday {
  day: "Tuesday";
}
interface Wednesday {
  day: "Wednesday";
}
interface Thursday {
  day: "Thursday";
}
interface Friday {
  day: "Friday";
}
interface Saturday {
  day: "Saturday";
}
interface Sunday {
  day: "Sunday";
}

type DaysOfWeek = Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday

function hiDay(day: DaysOfWeek): void {
  switch(day.day) {
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
