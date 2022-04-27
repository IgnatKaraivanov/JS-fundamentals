function arrayRotation(arr, rotationCount) {
  let arrayOfElements = arr;
  let rotation = rotationCount;
  let arrayL = arrayOfElements.length;
  for (let index = 0; index < rotation; index++) {
    let numberToMove = arrayOfElements.shift();
    let currentNumber = arrayOfElements[index];
    arrayOfElements.push(numberToMove);
  }
  console.log(arrayOfElements.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 7);