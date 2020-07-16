
// Person constructor function from previous lesson:
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.canVote = age >= 18;
//     this.greeting = () => `Hello, my name is ${ this.name }`;
// }


//This is the same as above, converted to a Person CLASS
class Person {

    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.canVote = age >= 18;
    }

    greeting () {
        return `Hello, my name is ${ this.name }`;  // <- string interpolation
    }
}