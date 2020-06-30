let num = -12;

// Ternary      (condition) ? (true) : (false)

(num > 0) 
? console.log('yes') 
: console.log('nah');

//Exactly the same as above:
if (num >0) {
    console.log('yes');
}
else{
    console.log('nah');
}



//Nesting ternaries

if (num > 0) {
    console.log('yes');
}
else if (num > 5){
    console.log('Im bigger than 5');
}
else{
    console.log('nah');
}

    // above can be put into a nested ternary below:

(num > 0 && num < 5)
    ? console.log('yes')
    : (num > 5)
        ? console.log('Im bigger than 5')
        : console.log('nah');


//Challenge --
//  write the AGE IF/ELSE as a big ternary

// if(age >= 25){
//     console.log("Yay! You can rent a car.");
// }
// else if(age >= 21){
//     console.log("Hey, you can purchase alcohol.");
// }
// else if(age >= 18){
//     console.log("Hey, you can vote!");
// }
// else {
//     console.log("You can do stuff one day");
// }

let age = 14;
(age >= 25)
    ? console.log("Yay! You can rent a car.")
    : (age >= 21)
        ? console.log("Hey, you can purchase alcohol.")
        : (age >= 18)
            ? console.log("Hey, you can vote!")
            : console.log("You can do stuff one day");
            