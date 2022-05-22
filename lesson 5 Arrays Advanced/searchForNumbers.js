function search(collection, numbers) {
  let modifiedArr = collection.slice(0, numbers[0]);
  let modifiedAfterDel = modifiedArr.splice(0, numbers[1]);
  let elementToFind = numbers[2];
  let counter = 0;
  for (let index = 0; index < modifiedArr.length; index++) {
    if (elementToFind === modifiedArr[index]) {
      counter++;
    }
  }
  console.log(`Number ${elementToFind} occurs ${counter} times.`);
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
