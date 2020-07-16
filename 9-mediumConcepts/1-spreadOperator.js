
// Spread Operator -- pulls each element out of an object and returns each value
//    -- also does not change the value of the original object

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

// Option 1:
// for (let item of array2) {
//     array1.push(item);
// }


// Option 2:
// array1 = array1.concat(array2)


console.log(array1);
console.log(...array1);

// Option 3:  SPREAD OPERATOR (...) -- works on arrays and objects
array1 = [ ...array1, ...array2];


// console.log(array1);

let person1 = {
    name: 'Smokey Bear',
    outfit: 'Bear costume'
}

let bearAttributes = {
    danger: 'RED',
    hunger: 10
}

// Trying to add these together:

// for (something in bearAttributes) {
//     person1[something] = bearAttributes[something];
// }

// OR:

person1 = {
    ...person1,
    ...bearAttributes
}

console.log(person1);