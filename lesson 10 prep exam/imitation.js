function imitation(input) {
  let text = input.shift();
  let result = [];

  for (let line of input) {
    line = line.split("|");
    let command = line[0];
    let p1 = line[1];
    let p2 = line[2];

    if (command === "ChangeAll") {
      for (let letter of text) {
        let changed = letter.replace(p1, p2);
        result.push(changed);
      }
      }
      else if (command === "Insert") {
        result.splice(Number(p1), 0, p2);
      } else if (command === "Move") {
        let moved = result.slice(Number(p1))
        result=result+moved
        console.log(result);

        }
      }}

        console.log(`The decrypted message is: ${result.join("")}`);
    
// imitation(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
imitation([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
