function sumLastKNum(n,k){
    let result =[1];
    for (let i = 0; i < n-1; i++) {
        let lastK =result.slice(-k);
        let sum =0;
        for (let element of lastK) {
            sum += element;
            
        }
        result.push(sum);
        
    }
    console.log(result.join(' '));

}

sumLastKNum(6,3);
sumLastKNum(8,2);
sumLastKNum(9,5);