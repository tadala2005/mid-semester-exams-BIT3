function calculateDiscount(price, customerType, isHoliday){
    
    let discount = 0;
    let customerType = ["regular","member","vip"]
    let isHoliday =true;

    for(let i=0;i<customerType.length;i++){
    if(price< 5000){
        discount = 0;
        price = price +(price *discount);        
    }
    else if(customerType[i]==="member"){
         discount = 0.1;
        price = price +(price *discount);

    }
    else if(customerType[i]==="vip"){
        if(isHoliday == true){
            discount = 0.25;
            price = price +(price *discount);

        }
        else{
            discount = 0.2;
            price = price +(price *discount);
        }

    }
    else{
        price = price;
    }
}
}

calculateDiscount(10000,"vip",true)

