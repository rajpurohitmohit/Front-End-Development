let first, second, third;

random = Math.random()
if (random < 0.33){
    first = 'Crazy';
}

else if(random > 0.33 && random < 0.66){
    first = 'Amazing';
}

else{
    first = 'Fire';
}

random2 = Math.random()
if (random2 < 0.33){
    second = 'Engine';
}

else if(random2 > 0.33 && random < 0.66){
    second = 'Foods';
}

else{
    second = 'Garments';
}

random3 = Math.random()
if (random3 < 0.33){
    third = 'Bros';
}

else if(random3 > 0.33 && random < 0.66){
    third = 'Limited';
}

else{
    third = 'Hub';
}


console.log(`${first} ${second} ${third}`);