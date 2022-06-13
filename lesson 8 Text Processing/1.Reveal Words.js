function reveal(words, string) {
  let wordsArr = words.split(", ");
  for (let word of wordsArr) {
    let template = "*".repeat(word.length);
    string = string.replace(template, word);
  }
  console.log(string);
}

reveal(
  "great",
  "softuni is ***** place for learning new programming languages"
);
