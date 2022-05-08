function palidromeIntegers(array) {
  let arrayOfNumbers = array;
  let inputL =arrayOfNumbers.length;
  let isPlaindrome = (num) => {
    let startNum = num;
    let reversedNum = Number(
      num.toString().split("").reverse().join("")
    );
    if (startNum === reversedNum) {
        return "true";
      } else {
        return "false";
      }
  };
  

  for (let index = 0; index < inputL; index++) {
    let currentNumber = arrayOfNumbers[index];
    console.log(isPlaindrome(currentNumber));
  }
}

palidromeIntegers([123, 323, 421, 121]);
// palidromeIntegers([32, 2, 232, 1010]);
