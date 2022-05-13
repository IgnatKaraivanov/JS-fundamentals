function printCertifikate(grade,names){
    if(pass(grade)){
        printHeader();
        printName(names);
        formatGrade(grade);
    }else{
        console.log("Student does non qualify");
    }

}

function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
  }
  function formatGrade(grade){
    let formatted = grade.toFixed(2);
    let desc;

    if(grade <3){
        formatted ="2";
        desc="Fail";
    }else if(grade<3.5){
        desc="Poor";
    }else if(grade<4.5){
        desc="Good";
    }else if(grade<5.5){
        desc="Very good";
    }else {
        desc="Excellent";
    }
    console.log(`${desc} (${formatted})`);
}
function printName(nameArr) {
    console.log(nameArr[0] + ' ' + nameArr[1]);
  }
function pass(grade){
    return grade >= 3;
}  
  
  printCertifikate(5.256, ["John","Smith"]);
  printCertifikate(4.33, ["Foncho","Razcvqtkov"]);
  printCertifikate(2.256, ["Rashko","Raskov"]);