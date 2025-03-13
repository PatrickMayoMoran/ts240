"use strict";
function formatName({ firstName = "John", lastName = "Doe", title }) {
    title = title ? title + ' ' : "";
    let formattedName = title + firstName + ' ' + lastName;
    return formattedName;
}
const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
