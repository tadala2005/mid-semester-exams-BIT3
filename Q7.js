let language =["chichewa","Yao","Tumbuka"]
let user = "tadala";

for(let i=0; i<language.length;i++){
    if(language[i]==="chichewa"){
        console.log(`muli bwanji, ${user}`)

    }
    else if(language[i]==="Yao"){
        console.log(`muli uli, ${user}`)
    }
    else if(language[i]==="Tumbuka"){
        console.log(`muli uli, ${user}`)
    }
    else{
        console.log(`how are you, ${user}`)
    }
}

swicth (language){
    Case: "chichewa"
        console.log(`muli bwanji, ${user}`)
    break;
    Case: "Yao"
        console.log(`muli uli, ${user}`)
    break;
    Case: "Tumbuka"
        console.log(`muli uli, ${user}`)
    break;
    Default 
        console.log(`how are you, ${user}`)  
}
