function activation(input) {
  // first take the first line of input
  let text = input.shift();
  
  input.pop();

  

  for (let lines of input) {
    lines = lines.split(">>>");
    if (lines[0] === "Slice") {
      let leftSide = text.slice(Number(lines[0]), Number(lines[1]));
      let rightSide = text.slice(Number(lines[2]));
      text = leftSide + rightSide;

      console.log(`${leftSide}${rightSide}`);
      //   console.log(text);
    } else if (lines[0] === "Contains") {
      let substring = lines[1];
      if (text.includes(substring)) {
        console.log(`${text} contains ${substring}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (lines[0] === "Flip") {
      if (lines[1] === "Upper") {
        let leftSide = text.slice(Number(lines[1]), Number(lines[2]));
        // console.log(leftSide);
        let rightSide = text.slice(Number(lines[3]));
        // console.log(rightSide);
        let sliced = text.slice(Number(lines[2]), Number(lines[3]));
        let fliped = sliced.toUpperCase();
        text = leftSide + fliped + rightSide;
        // console.log(fliped);

        console.log(`${leftSide}${fliped}${rightSide}`);
      } else if (lines[1] === "Lower") {
        let leftSide = text.slice(Number(lines[1]), Number(lines[2]));
        // console.log(leftSide);
        let rightSide = text.slice(Number(lines[3]));
        // console.log(rightSide);
        let sliced = text.slice(Number(lines[2]), Number(lines[3]));
        let fliped = sliced.toLowerCase();
        text = leftSide + fliped + rightSide;
        console.log(`${leftSide}${fliped}${rightSide}`);
      }
    }
    
        
    
    
  }
  console.log(`Your activation key is: ${text.toString()}`);
}

// activation([
//   "abcdefghijklmnopqrstuvwxyz",
//   "Slice>>>2>>>6",
//   "Flip>>>Upper>>>3>>>14",
//   "Flip>>>Lower>>>5>>>7",
//   "Contains>>>def",
//   "Contains>>>deF",
//   "Generate",
// ]);
activation(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
