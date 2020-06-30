
let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true 
}

let person2 = {
    name: 'Nicolas',
    age: 40,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}

// // Function to create persons in an object laid out as above
// function createPerson (name, age, canVote) {
//     let person = {
//         name: name,
//         age: age,
//         canVote: canVote,
//     }

//     return person;
// }

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.canVote = age >=18;

    this.greeting = () => `Hello, my name is ${ this.name }`;   // this is a method
}

/*
Notes: 'new' keyword tells the function to create a new object with key-value pairs defined by 'this' keyword
    -this means 'this' keyword calls do not do anything without using the 'new' keyword
*/

person1 = new Person('Bob', 24);

// console.log(person1.age);       // Can also be written as: console.log(person1['age']);


// This also means we have created a custom data type 'Person' that we can check with instanceof:
// console.log(person1 instanceof Person);


// Here Seth and Troy are two separate INSTANCES of our new Person data type
// 'this' keyword lets you access them uniquely
let seth = new Person('Seth', 54);
let troy = new Person('Troy', 12);

console.log(seth.greeting());



//This is the Array constructor function:
function Array(item1, item2, item3) {
    this.items={
        0: item1,
        1: item2,
        2: item3
    }
}
