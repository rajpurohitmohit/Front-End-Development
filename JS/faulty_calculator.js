// Faulty Calculator 
let a = 1;
let b = 2

let operation = "+"

if (Math.random() < 0.1){
    if (operation == "+"){
        console.log(a - b);
    }

    else if(operation == "-"){
        console.log(a / b);
    }

    else if(operation == "*"){
        console.log(a + b);
    }

    else if(operation == "/"){
        console.log(a ** b);
    }

    else{
        console.log('Operation cannot be performed');
    }
}

else{
    if (operation == "+"){
        console.log(a + b);
    }

    else if(operation == "-"){
        console.log(a-b);
    }

    else if(operation == "*"){
        console.log(a*b);
    }
    else if(operation == "/"){
        console.log(a/b);
    }
    else{
        console.log('Operation cannot be performed');
    }
}