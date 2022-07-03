function pianist(input) {
  let n = Number(input.shift());
  let piecesArr = input.splice(0, n);
  let pieces = {};
  piecesArr.forEach((el) => {
    let [name, composer, key] = el.split("|");
    pieces[name] = { composer, key };
  });
  for (const line of input) {
    if (line == "Stop") {
      Object.keys(pieces)
        .sort(
          (a, b) =>
            a.localeCompare(b) ||
            pieces[a].composer.localeCompare(pieces[b].composer)
        )
        .forEach((p) => {
          console.log(
            `${p} -> Composer: ${pieces[p].composer}, Key: ${pieces[p].key}`
          );
        });
      break;
    }
    let [comm, piece, x, y] = line.split("|");
    if (comm == "Add") {
      if (pieces.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        pieces[piece] = { composer: x, key: y };
        console.log(`${piece} by ${x} in ${y} added to the collection!`);
      }
    } else if ((comm = "Remove")) {
      if (pieces.hasOwnProperty(piece)) {
        console.log(`Succeessfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if ((comm = "ChangeKey")) {
      if (pieces.hasOwnProperty(piece)) {
        pieces[piece].key = x;
        console.log(`Changed the key of ${piece} to ${x}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
}
