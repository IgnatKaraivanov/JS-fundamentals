function race(input) {
  let namePattern = /A-Za-z/g;
  let distancePattern = /\d/g;
  let racerNames = input.shift().split(", ");
  let racers={}
  for(let name of racerNames)

  while (input[0] != "end of race") {
    let line = input.shift();
    let letters = line.match(namePattern);
    let numbers = line.match(distancePattern);
    let names = letters.join(" ");
    let distances = numbers.map(Number);

    let totalDistance = 0;
    for (let x of distances) {
      totalDistance += x;
    }
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
