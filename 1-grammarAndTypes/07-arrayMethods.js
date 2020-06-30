
//.push() and .pop() work with the last item in an array

let coffee = ['espresso', 'nitro cold brew', 'cappuccino', 'americano', 'cappuccino', 'frappuccino'];

console.log(coffee[2]);

let verybest = coffee.pop();
console.log(verybest);

console.log(coffee);

coffee.push('latte', 'decaf');

console.log(coffee);

// Stack (LIFO) think of it like a stack of pancakes
// Array.pop();
// Array.push(<item>);


// Queue (FIFO) think of it like a line for a roller coaster
// Array.shift();
// Array.unshift(<item>);

let shifted = coffee.shift();
console.log(shifted);
console.log(coffee);

coffee.unshift('instant', 'drip');
console.log(coffee);

// indexof() lets you find the index of a value, but only returns the value of the first matching index (if there are multiple values equal to what you are searching for)
console.log(coffee.indexOf('cappuccino'));

coffee.forEach((item, index) => {
    console.log(item, index);
});



/* Demo of what a callback funciton (callbacker() in this case) looks like: 
    let abc = (cb) => {
        console.log('When do I happen');
        cb();
    }

    let callbacker = () => console.log('I happen at some point');

    abc(callbacker);
*/