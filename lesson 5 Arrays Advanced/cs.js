function cs(input) {
    let k = input.shift();
    let firstK = input.slice(0,k)
    let lastK=input.slice(-k)
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

cs([2, 7, 8, 9]);
