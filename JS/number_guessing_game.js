// Number guessing Game

let random = Math.ceil(Math.random() * 10)

let userinput = prompt("Enter a random number")

// let userinput = 

console.log(`This is a number Guessing Game. Guess a number between 1 - 10`);
console.log(`You have got 5 chances for guessing the number`)


for (let i = 0; index < 5; index++) {
    
    if(random == userinput){
        console.log(`You Guessed it correct. The number was ${random}`);
        break;
    }
    else if(random < userinput){
        console.log(`The number is smaller`);
    }
    
    else if (random > userinput){
        console.log(`The number is larger`);
    }
    
    else{
        console.log(`Try Again`);
    }
}