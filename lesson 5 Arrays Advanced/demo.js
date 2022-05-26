function poddNum(arr) {
  let sortedProducts = arr.sort((a, b) => a.localeCompare(b));
  for (let index = 0; index < arr.length; index++) {
    console.log(`${index + 1}.${sortedProducts[index]}`);
  }
}

poddNum(["Potatoes", "Tomatoes", "Onions", "Apples"]);
