function arrayRotation(array, rotation) {
    for (let index = 0; index < rotation; index++) {
        let currentNum = array.shift();
        array.push(currentNum);
        
    }
    console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);