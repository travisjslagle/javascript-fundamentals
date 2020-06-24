/*

Variables

*/

let a = 2;

console.log(a);


  let              b         =              123               ;  //whitespace will not matter to browser/console (node)
//1                2         3               4
/*
1- Keyword
2- name you give the variable
3- assignement operator
4- value
//as code is executed, it is 'mini-fied' -- meaning all whitespace is removed and executed on one line by browser/console

let b;     //Declaration
b = 123;   //Initialization
*/

x = 45;
console.log(x);

var currentAge = 26;
//var is short for variable - used for things that change

const dob = "03/23/88";
//const is short for constant - used for things that do NOT change, will throw an error if a new value is assigned

//dob = "butt";  <-- error: TypeError: Assignment to constant variable. and points to line w/ error (:34:5)

currentAge = 88;
console.log(currentAge);