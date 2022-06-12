function rotation(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    {
      let [current, biggest] = [array.shift(), Math.max(...array)];
      if (current > biggest) {
        console.log(result.push(current));
      }
    }
  }
}

rotation([1, 4, 3, 2]);
