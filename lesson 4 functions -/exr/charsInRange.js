function charsInRange(char1, char2) {
  let firstChar = char1.charCodeAt();
  let seconChar = char2.charCodeAt();
  let result = [];
  if (firstChar < seconChar) {
    for (let index = firstChar + 1; index < seconChar; index++) {
      let charsAsNumbers = String.fromCharCode(index);
      result.push(charsAsNumbers);
    }
  } else if (seconChar < firstChar) {
    for (let index = seconChar + 1; index < firstChar; index++) {
      let charsAsNumbers = String.fromCharCode(index);
      result.push(charsAsNumbers);
    }
  }
  console.log(result.join(" "));
}

charsInRange("#", ":");
