function imitation(input){
    let text = input.shift();
    input.pop();

    for(let line of input){
        command=line.split("|");
        if(command[0]==="ChangeAll"){
            for(let char of text){
               text= text.replace(command[1],command[2])
            }
        }else if(command[0]==="Insert"){
            let first=text.slice(0,command[1])
            let second=text.slice(command[1])
            text=first+command[2]+second

        }else if(command[0]==="Move"){
            let first=text.slice(0,command[1])
            let second=text.slice(command[1])
            text=second+first

        }
    }
    console.log(`The decrypted message is: ${text}`);

}
imitation([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )