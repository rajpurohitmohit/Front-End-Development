//  Using reduce
let number = 6

function factorial(number){
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1,).reduce((a, b)=> a* b);
    return c;
}

console.log(factorial(number))


// Using loop
function usingloop(number){
    let fact = 1
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact
}

console.log(usingloop(number))