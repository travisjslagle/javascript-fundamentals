// I/O: input, output


let greeting = function (name){
    console.log(`Hello, ${name}!`);
}

greeting('Travis');

let printMyName = function (fName, lName){
    let fullName = fName + " " +lName;
    console.log(`Hello, my name is ${fullName}.`);    // <--string interpolation / formattable strings
}

printMyName('Travis', 'Slagle');


// We movin on

// write a function that calculates a simple bank account balance

let calculateBalance = function (debits, credits) {
    // parameter debits = [ numbers ]
    // parameter credits = [ numbers ]
    let total = 0;

    for (d of debits) {
        total -= d;
        console.log(total);
    }
    for (c of credits) {
        total += c;
        console.log(total);
    }
    console.log(`Bank total is ${total}.`);
}

let expenditures = [50.00, 22.34, 18.90, 205.60, 8.94, 6.78, 34.20];
let paydays = [2567.40, 100.00, 75.00]

calculateBalance(expenditures, paydays);