function solve(input) {
  let heroes = {};
  // create empty obj
  let n = Number(input.shift());
  // remove first n line with commands
  input
    .splice(0, n)
    // remove(heroes)
    .forEach((line) => {
      let [heroName, hp, mp] = line.split(" ");
      hp = Number(hp);
      mp = Number(mp);
      heroes[heroName] = { hp, mp };
    });
  // loop with destructuring of obj
  // console.log(heroes['Kyrre']);
  // create functions for every command
  input.forEach((line) => {
    let [command, ...tokens] = line.split(" - ");
    // ... means destructuring of command
    let output;
    if (command !== "End") {
      if (command === "CastSpell") {
        output = CastSpell(heroes, ...tokens);
      } else if (command === "Recharge") {
        output = Recharge(heroes, ...tokens);
      } else if (command === "TakeDamage") {
        output = TakeDamage(heroes, ...tokens);
      } else if (command === "Heal") {
        output = Heal(heroes, ...tokens);
      }
      console.log(output);
    }
  });
  let sortedHeroes = Object.entries(heroes).sort(compareHeroes);
  for (let [heroName, heroInfo] of sortedHeroes) {
    let { hp, mp } = heroInfo;
    console.log(heroName);
    console.log(`  HP: ${hp}`);
    console.log(`  MP: ${mp}`);
  }
  function compareHeroes(a, b) {
    let [aName, aInfo] = a;
    let [bName, bInfo] = b;

    let byHealDecsending = bInfo.hp - aInfo.hp;
    if (byHealDecsending === 0) {
      return aName.localCompare(bName);
    }
    return byHealDecsending;

    //   numbers ascending=>a-b
    //   numbers descending=>b-amount
    //   alphabetical=>a.localCompare(b)
  }
  function CastSpell(heroes, heroName, mpNeeded, spellName) {
    mpNeeded = Number(mpNeeded);
    let hero = heroes[heroName];
    if (hero.mp >= mpNeeded) {
      hero.mp -= mpNeeded;
      return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`;
    }
    return `${heroName} does not have enough MP to cast ${spellName}!`;
  }
  function TakeDamage(heroes, heroName, damage, attacker) {
    damage = Number(damage);
    let hero = heroes[heroName];
    hero.hp -= damage;
    if (hero.hp > 0) {
      return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`;
    }
    delete heroes[heroName];
    return `${heroName} has been killed by ${attacker}!`;
  }
  function Recharge(heroes, heroName, amount) {
    amount = Number(amount);
    let hero = heroes[heroName];
    let oldValue = hero.mp;
    hero.mp = Math.min(200, hero.mp + amount);
    // take the smmalest of two numbers
    return `${heroName} recharged for ${hero.mp - oldValue} MP!`;
  }
  function Heal(heroes, heroName, amount) {
    amount = Number(amount);
    let hero = heroes[heroName];
    let oldValue = hero.hp;
    hero.hp = Math.min(100, hero.hp + amount);
    return `${heroName} healed for ${hero.hp - oldValue} HP!`;
  }
}

solve([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
