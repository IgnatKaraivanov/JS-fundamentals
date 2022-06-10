function solve(input) {
  let addressbook = {};
  for (let entry of input) {
    entry = entry.split(":");
    let name = entry[0];
    let addres = entry[1];
    addressbook[name] = addres;
  }
  let sortedArray = Object.entries(addressbook);
  sortedArray.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
    return keyA.localeCompare(keyB);
  });
  for (sortedEntry of sortedArray) {
    console.log(`${sortedEntry[0]} -> ${sortedEntry[1]}`);
    
  }
}
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);