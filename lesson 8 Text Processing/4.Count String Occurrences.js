function countOccurrences(string, occurencces) {
  let text = string.split(" ");

  let counter = 0;
  for (let index = 0; index < text.length; index++) {
    let word = text[index];
    if (word === occurencces) {
      counter++;
    }
  }
  console.log(counter);
}

countOccurrences("This is a word and it also is a sentence is is is", "is");
