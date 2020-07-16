
let [name, age, height] = ['Yaboi', , 45];

console.log(name, age, height);
console.log(name);

let numbers = [1, 4, 8, 9];
let [x, y, z, j] = numbers;

console.log(x, z, j);


function handleThing (u) {
    let n = [];
    for(let i=0; i< u; i++){
        n.push(i);
    }
    return n;
}

let [first, second, third] = handleThing(3);

console.log(first, second, third);


// Short hand object literal definition:
let information = 'valuable';
let representation = 123;

let status = {
    information,
    representation
}

console.log(status);


// Object destructuring:
let lunch = {
    greens: false,
    protein: true,
    duration: 80,
    rating: 'Good'
}

let { greens, protein, duration, rating } = lunch;


// Using object destructuring in parameter definitions
            // Only 2 params in shiftPosition() below

let coordinate = {
    x: 44,
    y: 21,
    z: -89
}

let shiftPosition = ({x, y, z}, force) => {
    x += force/2;
    y -= force*3;
    z *= force/120;
    return {x, y, z}
}

let newPosition = shiftPosition(coordinate, 780);
console.log(newPosition);