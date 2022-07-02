function secret(input) {
  let password = input.shift().split("");
  let newPassword = [];
  //   input.pop();

  for (let command of input) {
    command = command.split(" ");
    // console.log(password);
    if (command[0] === "TakeOdd") {
      for (let index = 0; index < password.length; index++) {
        if (index % 2 === 1) {
          newPassword.push(password[index]);
        }
      }
      console.log(newPassword.join(""));
    } else if (command[0] === "Cut") {
      newPassword.splice(Number(command[1]), Number(command[2]));
      console.log(newPassword.join(""));
    } else if (command[0] === "Substitute") {
      let newPasswordToText = newPassword.join("").toString();
      let substring = command[1].toString();
      let substitute = command[2].toString();
      if (newPasswordToText.includes(substring)) {
        for (let lines of newPasswordToText)
          newPasswordToText = newPasswordToText.replace(substring, substitute);
        console.log(newPasswordToText);
      } else if (!newPasswordToText.includes(substring)) {
        console.log(`Nothing to replace!`);
      }
      newPassword = newPasswordToText.split("");
    } else if (command[0] === "Done") {
      newPassword = newPassword.join("");

      console.log(`Your password is: ${newPassword}`);
    }
  }
}
secret(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

