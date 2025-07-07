function calc(a , b , op){

    if(typeof a !== 'number' || typeof b !== 'number'){
        console.error(new TypeError("both the input must be number"));
        return ;
    }

    switch(op){
        case '+' :
            console.log("input");
            console.log("num1  :  ", a ,);
            console.log("num2  : ",b);
            console.log("output");
            console.log( "Addition : " , a+b);
            break;

        case '*':
            console.log("input");
            console.log("num1  :  ", a ,);
            console.log("num2  : ",b);
            console.log("output");
            console.log( "multiplication : " , (a*b));
            break;

        case '-':
            console.log("input");
            console.log("num1  :  ", a ,);
            console.log("num2  : ",b);
            console.log("output");
            console.log( "subraction : " , a-b);
            break;

        case '/':
            if(b == 0){
                console.error("not zero denominator");
            }
            else{
                console.log("input");
            console.log("num1  :  ", a ,);
            console.log("num2  : ",b);
            console.log("output");
                console.log("division : " , a/b);
            }
            break;

        default:
            console.error("type valid operator")
    }
}

console.log("--------- karthick calculator ------------");
calc(1,2,'+');





