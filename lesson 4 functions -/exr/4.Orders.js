function orders(product,quantity){
    let result =product*quantity;
    if(product === "coffee"){
        
       result= (quantity*1.5).toFixed(2);
    }else if(product === "water"){
        
       result= (quantity*1).toFixed(2);
    }else if(product === "coke"){
        
        result = (quantity*1.4).toFixed(2);
    }else if(product === "snacks"){
        
       result = (quantity*2).toFixed(2);
    }
    console.log(result)

}
orders("water", 5);
orders("coffee", 2);
orders("coke", 2);
orders("snacks", 2);