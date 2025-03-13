"use strict";
function formatName(options) {
    var _a, _b;
    let title = options.title ? options.title + ' ' : "";
    let firstName = (_a = options.firstName) !== null && _a !== void 0 ? _a : "John";
    let lastName = (_b = options.lastName) !== null && _b !== void 0 ? _b : "Doe";
    return `${title}${firstName} ${lastName}`;
}
const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
