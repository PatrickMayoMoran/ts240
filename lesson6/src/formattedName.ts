type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName(options: NameOptions): string {
  let title = options.title ? options.title + ' ' : "";
  let firstName = options.firstName ?? "John";
  let lastName = options.lastName ?? "Doe";
  return `${title}${firstName} ${lastName}`
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
