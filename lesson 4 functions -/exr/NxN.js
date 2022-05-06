function NxN(input) {
  let number = input;
  
  for (let index = 0; index < number; index++) {
    let output = "";
    for (let j = 0; j < index; j++) {
      output += `${number}`;
    }
  }
}

NxN(6);
