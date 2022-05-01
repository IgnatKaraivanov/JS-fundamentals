function charsInRange(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let charsInRangeArray = [];

    for (let index = startChar + 1; index < endChar; index++) {
        charsInRangeArray.push(String.fromCharCode(index));

    }
    console.log(charsInRangeArray.join(" "));
}


charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');
