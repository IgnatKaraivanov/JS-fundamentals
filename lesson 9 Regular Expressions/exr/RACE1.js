function race(arr) {
  let namePattern = /[A-Za-z]/gm;
  let distancePattern = /\d/gm;
  let racers = arr.shift().split(", ");

  while (arr[0] != "end of race") {
    let line = arr.shift();
    let letters = line.match(namePattern);
    let numbers = line.match(distancePattern);
    let name = letters.join("");
    let distances = numbers.map(Number);
    let totalDistance = 0;
    for (const x of distances) {
      totalDistance += x;
    }

    console.log(name, totalDistance);
  }
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
