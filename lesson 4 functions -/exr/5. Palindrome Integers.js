function palindromeInt(inputArr){
    let arrOfNums = inputArr;
    function isPalindrome(number){
        let start = number;
        let reversed = (Number(number.toString().split("").reverse().join("")));
        if (start === reversed){
            return true;
        }else {
            return false;
        }
    }
    for (let index =0;index < arrOfNums.length;index++ ){
        let curNum = arrOfNums[index];
        console.log(isPalindrome(curNum))
    }

}