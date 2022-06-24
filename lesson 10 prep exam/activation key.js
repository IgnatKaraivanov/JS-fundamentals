function activation(input) {
  let key = input.shift();
  input.pop();
  for (let command of input) {
    command = command.split(">>>");
    if (command[0] === "Slice") {
      let before = key.slice(0, Number(command[1]));
      let after = key.slice(Number(command[2]));
      key = before + after;
      console.log(key);
    } else if (command[0] === "Flip") {
      let before = key.slice(0, command[2]);
      let after = key.slice(command[3]);
      let fliped = key.slice(command[2], command[3]);
      if (command[1] === "Upper") {
        fliped = fliped.toUpperCase();
      } else {
        fliped = fliped.toLowerCase();
      }
      key = before + fliped + after;
      console.log(key);
    } else if (command[0] === "Contains") {
      if (key.includes(command[1])) {
        console.log(`${key} contains ${command[1]}`);
      } else {
        console.log("Substring not found!");
      }
    }
  }
  console.log(`Your activation key is: ${key}`);
}
activation([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
