function meeting(input) {
  let calendar = {};
  for (let entry of input) {
    let tokens = entry.split(" ");
    let weekday = tokens[0];
    let name = tokens[1];
    if(calendar.hasOwnProperty(weekday)){
        console.log(`Conflict on ${weekday}!`)
    }else{
        calendar[weekday] = name;
        console.log(`Scheduled for ${weekday}`);
    }
  }
  for (let assocKey in calendar) {
    console.log(`${assocKey} -> ${calendar[assocKey]}`);
  }
}

meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
