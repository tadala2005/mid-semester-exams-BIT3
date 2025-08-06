let trafficLight =["red","yellow","green"]

for(let i=0; i<trafficLight.length;i++){
    if(trafficLight[i]==="red"){
        console.log("stop")
    }else if(trafficLight[i]==="yellow"){
        console.log("get ready")
    }
    else if(trafficLight[i]==="green"){
        console.log("go")
    }
    else{
        console.log("keep waiting")
    }
}

swicth (trafficLight){
    Case: "red"
        console.log("stop")
    break;
    Case: "yellow"
        console.log("get ready")
    break;
    Case: "green"
        console.log("go")
    break;
    Default 
        console.log("keep waiting")  
}
