let b = 7;

// For loop controller ie: (pos1; pos2; pos3)
// pos1: Variable declaration and/or initialization
// pos2: Condition needed to run (needs to be true)
// pos3: Incrementation or change to allow the condition to fail
            //10
for (z = 0; z < 1; z++) {
    console.log('nice');
    // increment i 
    // verify conditional (hop up if true, leave loop if false)
}

// note: ctrl+c breaks an infinite loop

// Challenge: Using a for loop, console log from 0 to 20 counting by 2's
let i = [];
            //20
for (let i=0; i <= 2; i+=2){
    console.log(i);
}

console.log(i);


//Count from 10, to 0:
        //10
for (j = 1; j>=0; j--){
    console.log(j);
}
/*
let name = "Patrick";
let pChar = name[0];

console.log(pChar);
*/

// Challenge: 
// Use a for loop, create a name variable, console.log each character individually --must be modular

let name = 'Travis';

for (i = 0; i < name.length; i++){
    console.log(name[i]);
}

//This is another way to write the above
for (let c of name){
    console.log(c);
}


let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

// for (j=0; j < invoice.length; j++){
//     total += invoice[j];
//     console.log(total);
// }

// console.log("Grand Total: " + total);


//Write the above as a forOf loop

for (let p of invoice) {
    total += p;
}
console.log(total);