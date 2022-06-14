function stringSubstring(word,text){
    let sentence=text.toLowerCase();
    let wordToLower=word.toLowerCase();
    let sentenseAsArray =sentence.split(' ');
    if(sentenseAsArray.includes(wordToLower)){
        console.log(wordToLower);
    }else{
        console.log(`${wordToLower} not found!`);
    }

}
stringSubstring('javascript',
'JavaScript is the best programming language'
);