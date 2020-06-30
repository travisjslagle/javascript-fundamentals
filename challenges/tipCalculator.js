
/*

Make a tip calculator using a function,
that takes in the BILL (number),
have it RETURN the TIP (number),
Capture that returned TIP in a VARIABLE,
Print that variable.

*/
let percent = 19;
let bill = 45.00;

let tipCalculator = (bill, percent) => {
    let tip = bill * percent / 100;
    return tip;
}

let myTip = tipCalculator(bill, percent);

console.log(`${percent}% Tip: ${ myTip } -- Grand Total: ${bill + myTip}`);