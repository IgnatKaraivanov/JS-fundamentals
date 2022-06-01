function catCreator(array) {
  class Cats {
    constructor(name, age) {
      this.name = name,
      this.age = age,
      this.meow = () => {
        console.log(`${this.name}, age ${this.age} says Meow`);
      };
    }
  }
  for (let currentString of array) {
    let currentData = currentString.split(" ");
    let currentCat = new Cats(currentData[0], currentData[1]);
    currentCat.meow();
  }
}
catCreator(["Candy 1", "Poppy 3", "Nyx 2"]);
