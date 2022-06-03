function wordsTracker(input) {
    let searchedWords = input.shift().split(' ')
    let myWords = {}
    for (let elements of searchedWords) {
        myWords[elements] = 0;
    }
    for (let word of input) {
        if (myWords.hasOwnProperty(word)) {
            myWords[word] += 1;
        }
    }
    let sortedWords = Object.entries(myWords).sort((a, b) => {
        return b[1] - a[1];
    });
    sortedWords.forEach((el) => {
        console.log(`${el[0]} - ${el[1]}`);

    })


}