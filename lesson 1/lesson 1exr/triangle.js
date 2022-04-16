function triangle(num) {
    let number = num;
    for (let index = 1; index <= number; index++){
        let output = "";
        for (let j = 1; j <= index; j++) {
            output += `${index}`

        }
        console.log(output);

    }
    
}



triangle(6);
triangle(9);