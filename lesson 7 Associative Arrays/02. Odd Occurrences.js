function Occurrences(input) {
    let searchedWords = input.toLowerCase().split(" ");
    let map = new Map();
    for (const word of searchedWords) {
        let num = 0;
        if (map.has(word)) {
            num = map.get(word);
        }
        num++;
        map.set(word, num);
    }

    let entries = Array.from(map);
    let filtered = entries.filter((el) => {
        return el[1] % 2 !== 0;
    });
    let result = [];
    for (const word of filtered) {
        result.push(word[0]);
    }
    console.log(result.join(" "));
}