function worldTour(input) {
  let text = input.shift();
  input.pop();
  for (let line of input) {
    command = line.split(":");
    if (command[0] === "Add Stop") {
      if (
        Number(text.length) >= Number(command[1]) &&
        Number(command[1]) >= 0
      ) {
        let first = text.slice(0, command[1]);
        let second = text.slice(command[1]);
        text = first + command[2] + second;
        
      }
      console.log(text);
    } else if (command[0] === "Remove Stop") {
      if (
        Number(text.length) > Number(command[1]) &&
        Number(command[1]) >= 0 &&
        Number(text.length) > Number(command[2]) &&
        Number(command[2]) >= 0
      ) {
        let first = text.slice(0, Number(command[1]));
        let second = text.slice(Number(command[2]) + 1);
        text = first + second;
        
      }
      console.log(text);
    } else if (command[0] === "Switch") {
      if (text.includes(command[1])) {
        text = text.replace(command[1], command[2]);
        console.log(text);
      } else {
        console.log(text);
      }
      
    }
  }
  console.log(`Ready for world tour! Planned stops: ${text}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

// take text from input
// parse commands
// add stop
// -if index is valid take left and right part (divide at index)
// -text= left +inserted stop+right
// -print result

// remove stop
// if all indexes are valid
// -find location of substring
// -if found:
// -take left and right with slice
// -print left+right without substring

// switch
// -replace all occurrences of substring with replacment
// -print current text
// print result
// travel
// print result in interpoliran string
