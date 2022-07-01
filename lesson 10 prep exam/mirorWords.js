function miror(input) {
  let text = input.shift();
  let pattern =
    /(\#|\@)([A-Za-z][A-Za-z][A-Za-z]+)\1\1([A-Za-z][A-Za-z][A-Za-z]+)\1/gm;
  match = pattern.exec(text);
  let words = [];
  let mirorWords = [];
  let count = 0;
  // console.log(match);
  while (match != null) {
    words.push(match[2]);
    words.push(match[3]);

    match = pattern.exec(text);
  }
  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 1) {
      words[i] = words[i].split("").reverse().join("");
    }
    if (words[i]==words[i+1]) {
        count++
        
    }
  }
  console.log(words);
  console.log(count);
}
miror([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
