function addAndSubstract(num1, num2, num3) {
  function sumOffirstSecond(first, second) {
    return first + second;
  }
  function sub(sumOffirstSecond, third) {
    return sumOffirstSecond - num3;
  }
  let sum = sumOffirstSecond(num1, num2);
  let result = sub(sum, num3);
  console.log(result);
//   console.log(num1 + num2 - num3);
}

addAndSubstract(23, 6, 10);
addAndSubstract(1, 17, 30);
addAndSubstract(42, 58, 100);
