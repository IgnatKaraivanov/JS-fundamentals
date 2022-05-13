function signCheck(num1, num2, num3) {
    if (num1 < 0 && num2 < 0 && num3 >=0) {
        console.log("Positive")
    } else if (num1 < 0 && num3 < 0 && num2>=0) {
        console.log("Positive")
    } else if (num2 < 0 && num3 < 0 && num1>=0) {
        console.log("Positive")
    } else if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        console.log("Positive")
    }
    else {
        console.log("Negative")
    }

}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(6, 12, 14);
signCheck(-6, -12, -14);
signCheck(0, 0, 0);