function repeatString(string,num){
    let result="";
    for (let index = 0; index < num; index++) {
        result +=string;
        
    }
    return result;

}
console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));
console.log(repeatString("hasMokar",4));