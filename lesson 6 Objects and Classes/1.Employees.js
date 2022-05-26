function employees(input) {
  for (let singleName of input) {
    let singlePerson = {
      name: singleName,
      personalNumber: singleName.length,
    };
    console.log(
      `Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNumber}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
