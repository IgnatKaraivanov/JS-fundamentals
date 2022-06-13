function hashtag(text) {
  let result = [];
  for (const element of text.split(" ")) {
    if (element[0] === "#" && element.length !== 1) {
      result.push(element.substring(1));
    }
  }
  let finalResult = [];
  for (let el of result) {
    let array = el.split("");
    let arrL = array.length;
    let flag = true;
    for (let index = 0; index < arrL; index++) {
      let currentCode = array[index].charCodeAt(0);
      if (
        (currentCode < 97 || currentCode > 122) &&
        (currentCode < 65 || currentCode > 90)
      ) {
        flag = false;
      }
    }
    if (flag) {
      finalResult.push(el);
    }
  }
  finalResult.forEach((el) => console.log(el));
}
hashtag("Nowadays everyone uses # to tag a #special word in #socialMedia");
