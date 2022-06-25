function activation(input) {
  let key = input.shift();
  input.pop();

  for (let command of input) {
    command = command.split(">>>");
    if (command[0] === "Slice") {
      let firstWord = key.slice(0, Number(command[1]));
      let secondWord = key.slice(Number(command[2]));
      key = firstWord + secondWord;
      console.log(key);
    } else if (command[0] === "Flip") {
      let firstWord = key.slice(0, Number(command[2]));
      let secondWord = key.slice(Number(command[3]));

      //   console.log(fliped);
      if (command[1] === "Upper") {
        let fliped = key
          .slice(Number(command[2]), Number(command[3]))
          .toUpperCase();
        // console.log(key);
        key = firstWord + fliped + secondWord;
      } else if (command[1] === "Lower") {
        let fliped = key
          .slice(Number(command[2]), Number(command[3]))
          .toLowerCase();
        key = firstWord + fliped + secondWord;
      }

      console.log(key);
    } else if (command[0] === "Contains") {
      let substring = command[1];
      if (key.includes(substring)) {
        console.log(`${key} contains ${substring}`);
      } else {
        console.log("Substring not found!");
      }
    }
  }
  console.log(`Your activation key is: ${key.toString()}`);
}
activation([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
