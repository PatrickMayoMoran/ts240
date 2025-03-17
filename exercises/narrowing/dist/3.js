"use strict";
function nonEmptyString(arg) {
    arg && console.log("Input is defined and not empty");
}
nonEmptyString("Meow");
nonEmptyString("");
nonEmptyString(undefined);
