// Booleans
let isOn = true;

let isRaining = false;

// Null
let empty = null;

// Undefined
let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);

// Numbers
let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999;  //This is 15 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; //This is  16 9's
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 + 10) / 10;
console.log(numbersAreHard);

let created = Number('123');  //Turn 123 into the number 123
console.log(created);

let abc = Number('z');  //Returns NaN -- short for Not a Number

// Strings
let stringOne = "doubleydoos";
let stringTwo = 'singleydoos';

let first = 1050 + 100;
let second = '1050' + '100';
let third = 1050 + '100';
let last = '1050' + 100;
console.log(first, second, third, last);

let firstName = "Travis";
let lastName = 'Slagle';
console.log(firstName + " " + lastName);

// escape characters
/*  \ (backslash) - tells JS to ignore the next character; to use a backslash in your string: double up! (e.g.: \\)
  also:
  \t= tab
  \n= new line
*/


// Objects

let frodo = {
    race: 'Hobbit',
    rings: 1,
    cloak: true,
    primaryWeapon: {
        name: 'Sting',
        attack: 30,
        damage: false
    }                      //<--can use a 'trailing comma' on the last key-value pair as a design choice, but not necessary.
};

console.log(typeof frodo);

// Array

let groceryList = ['banana', 'kiwi', 'coconut'];

let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallabee']];

console.log(typeof aThing);  //<-- does not produce 'array', instead returns 'object'. 
console.log(aThing instanceof Array);  //<-- compares variable to a generic Array type, returns true (if it matches)


// STRINGS: Methods

let userTitle = "       a DaY in tHE lIfe of dev          ";
console.log(userTitle.toUpperCase());   //forces all letters into uppercase
console.log(userTitle.trim());
console.log(userTitle.includes('in'));