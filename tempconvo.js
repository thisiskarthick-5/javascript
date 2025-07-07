function temperature(value , unit){
    if(unit == 'C'){
        return (value * 9/5) + 32  + "F";
    }
    else if(unit == 'F'){
        return (value - 32) * 5/9 + "C";
    }
    else{
        return "invalid";
    }
}
let res = temperature(212, 'F');
console.log("result : " , res);

