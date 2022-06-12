function solve(firstArr, secondArr) {
  let thirdArr = [];
  for (let index = 0; index < firstArr.length; index++) {
    if (index % 2 === 0) {
      thirdArr.push(Number(firstArr[index]) + Number(secondArr[index]));
    } else if (!index % 2 === 0) {
      thirdArr.push(`${firstArr[index]}${secondArr[index]}`);
    }
  }
  console.log(thirdArr.join(" - "));
}

solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
);
