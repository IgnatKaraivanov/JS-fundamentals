function bomb(sequence,bomb){
    let specialNumber =bomb[0];
    let bombPower =bomb[1];

    while(sequence.includes(specialNumber)){
        let index =sequence.indexOf(specialNumber);
        let elementsToRemove =bombPower*2+1;
        let startIndex = index -bombPower;
        if(startIndex<0){
            elementsToRemove+=startIndex;
            startIndex=0;
        }
        sequence.splice(startIndex,elementsToRemove);
    }
    let finalResult =sequence.reduce((a,b)=>{
        return a+b;
    },0);
    console.log(finalResult);

}
bomb([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);