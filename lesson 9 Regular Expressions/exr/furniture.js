function furniture(arr) {
  let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/gm;
  let furniture = [];
  let tempTotal = 0;
  console.log(`Bought furniture:`);
  for (const str of arr) {
      let match=pattern.exec(str)
      while(match !== null) {
          let name=match.groups['name']
          let price = Number(match.groups['price'])
          let qty = Number(match.groups['qty'])
          match=pattern.exec(str)
          console.log(`${name}`);
          tempTotal+=price*qty
      }
      
  }
  
  console.log(`Total money spend: ${tempTotal.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
