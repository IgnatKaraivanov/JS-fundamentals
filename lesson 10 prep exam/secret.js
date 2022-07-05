function secret(input) {
  let text = input.shift();
  for (let comand of input) {
    comand = comand.split(":|:");
    if (comand[0] === "ChangeAll") {
      for (let chars of text) {
        text = text.replace(comand[1], comand[2]);
      }
      console.log(text);
    } else if (comand[0] === "Reverse") {
      if (text.includes(comand[1])) {
        let reverse = comand[1].split("").reverse().join("");
        let firstWord = text.slice(0, -reverse.length);
        text = firstWord + reverse;
        console.log(text);
      }else if (!text.includes(comand[1])) {
        console.log(`error`);
      }
    } else if (comand[0] === "InsertSpace") {
      let firstWord = text.slice(0, Number(comand[1]));
      let secondWord = text.slice(Number(comand[1]));
      text = firstWord + " " + secondWord;
      console.log(text);
    }
    
  }

  console.log(`You have a new text message: ${text}`);
}
secret([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil","Reverse:|:!gil",
  "InsertSpace:|:5",
  "Reveal",
]);
