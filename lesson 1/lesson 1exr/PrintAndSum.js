 function solve(startNum, endNum){
     let sum = 0;
     let sequence ="";
     for (let index =startNum; index<= endNum; index++){
         sum += index;
         sequence += index +" ";
     }
     console.log(sequence.trim());
     console.log(`Sum: ${sum}`);
 }