function rounding(num,precis){
    num = Number(num);
    precis =Number(precis);
    if (precis > 15){
        precis = 15;
    }
    num = num.toFixed(precis)
    console.log(parseFloat(num));

}

rounding(3.1415926535897932384626433832795,10)
rounding(10.5,3)