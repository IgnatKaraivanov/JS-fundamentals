function censored(string, word) {
  let wordLength = word.length;
  while (string.includes(word)) {
    string = string.replace(word, "*".repeat(wordLength));
  }
  console.log(string);
}
censored("A small sentence with some words", "small");
