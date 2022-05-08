function sumOfOddAndEvan(input) {
  let inputAsString = input.toString();
  let oddSum = 0;
  let evanSum = 0;
  for (let index = 0; index < inputAsString.length; index++) {
    let currentElement = Number(inputAsString[index]);
    if (currentElement % 2 === 0) {
      evanSum += currentElement;
    } else if (currentElement % 2 !== 0) {
      oddSum += currentElement;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evanSum}`);
}
sumOfOddAndEvan(1000435);
