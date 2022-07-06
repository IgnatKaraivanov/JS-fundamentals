function miror(input) {
  let password = input.shift();
  let newPassword = [];
  input.pop();
  for (let command of input) {
    command = command.split(" ");
    if (command[0] === "TakeOdd") {
      for (let i = 0; i < password.length; i++) {
        if (i % 2 === 1) {
          newPassword.push(password[i]);
        }
      }
      console.log(newPassword.join(""));
    } else if (command[0] === "Cut") {
      newPassword.splice(Number(command[1]), Number(command[2]));
      console.log(newPassword.join(""));
    } else if (command[0] === "Substitute") {
      let substring = command[1];
      let substitute = command[2];
      let passToString = newPassword.toString();
      console.log(passToString);
      if (passToString.includes(substring)) {
        for (const occur of passToString) {
          newPassword = passToString.replace(substring, substitute);
        }
      }
    }
  }
}

miror([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
