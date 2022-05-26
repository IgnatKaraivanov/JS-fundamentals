function manipulator(input) {
  let array = input.shift().split(" ").map(Number);
  let newArray = [];

  for (let i = 0; i < input.length; i++) {
    let [command, firstNum, secondNum] = input[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
  
  }
  console.log(secondNum);
}
manipulator([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
