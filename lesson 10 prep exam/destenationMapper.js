function destenation(text) {
  let pattern = /(=|\/)([A-Z][A-Za-z][A-Za-z]+)\1/g;
  let travel_points = 0;
  let destenation = [];
  match = pattern.exec(text);
  while (match != null) {
    let place = match[2];
    destenation.push(place);

    match = pattern.exec(text);
  }
  for (let words of destenation) {
    travel_points += words.length;
  }
  console.log(`Destinations: ${destenation.join(", ")}`);
  console.log(`Travel Points: ${travel_points}`);
}

destenation("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
