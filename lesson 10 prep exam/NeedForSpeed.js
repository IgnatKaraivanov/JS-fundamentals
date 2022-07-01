function nfs(input) {
  let n = Number(input.shift());

  let cars = {};
  for (let index = 0; index < n; index++) {
    let tokens = input.shift().split("|");
    let car = tokens[0];
    let mielege = tokens[1];
    let fuel = tokens[2];

    cars[car] = {
      mielege,
      fuel,
    };
  }
  while (input[0] !== "Stop") {
    let line = input.shift();
    let tokens = line.split(" : ");
    let command = tokens[0];
    if (command === "Drive") {
      let carNew = tokens[1];
      let mielegeNew = tokens[2];
      let fuelNew = tokens[3];
      if (fuelNew < 0) {
        console.log(`Not enough fuel to make that ride`);
      }
    }
  }
}
nfs([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
