function vacation(peopleCount, groupType, dayOfWeek){
   let studentsFrydayPrice = 8.45;
   let buisinessFrydayPrice = 10.9;
   let regularFrydayPrice = 15;
   let studentsSaturdayPrice = 9.8;
   let buisinessSaturdayPrice = 15.6;
   let regularSaturdayPrice = 20;
   let studentsSundayPrice = 10.46;
   let buisinessSundayPrice = 16;
   let regularSundayPrice = 22.5;
    
   let studentDiscountPersantage = 15;
   let buisinessDiscounPeople = 10;
   let regularDiscounPersantage = 5;

   let totalPrice =0;

   if(groupType ==="Business" && peopleCount >= 100){
       peopleCount -= buisinessDiscounPeople;
   }
   if(groupType === "Students" && dayOfWeek ==="Friday"){
       totalPrice +=peopleCount * studentsFrydayPrice;
   }else if(groupType ==="Students" && dayOfWeek ==="Saturday"){
    totalPrice +=peopleCount * studentsSaturdayPrice;
   }else if(groupType ==="Students" && dayOfWeek ==="Sunday"){
    totalPrice +=peopleCount * studentsSundayPrice;
   }else if(groupType ==="Regular" && dayOfWeek ==="Friday "){
    totalPrice +=peopleCount * regularFrydayPrice;
   }else if(groupType ==="Regular" && dayOfWeek ==="Saturday"){
    totalPrice +=peopleCount * regularSaturdayPrice;
   }else if(groupType ==="Regular" && dayOfWeek ==="Sunday"){
    totalPrice +=peopleCount * regularSundayPrice;
   }else if(groupType ==="Business" && dayOfWeek ==="Friday "){
    totalPrice +=peopleCount * buisinessFrydayPrice;
   }else if(groupType ==="Rusiness" && dayOfWeek ==="Saturday"){
    totalPrice +=peopleCount * buisinessSaturdayPrice;
   }else if(groupType ==="Rusiness" && dayOfWeek ==="Sunday"){
    totalPrice +=peopleCount * buisinessSundayPrice; 
   }
   if(groupType === "Students" && peopleCount >=30){
       totalPrice -= (studentDiscountPersantage /100)*totalPrice;
   }else if(
       groupType ==="Regular" && 
       peopleCount >= 10 &&
       peopleCount <= 20
   ){
       totalPrice -=(regularDiscounPersantage /100)*totalPrice;
   }
   console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")