function wordTracker(input){
    let splitInput = input.shift().split(" ")
    let firstWord = splitInput.shift(" ")
    
    console.log(splitInput[1]);
    
    

}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );