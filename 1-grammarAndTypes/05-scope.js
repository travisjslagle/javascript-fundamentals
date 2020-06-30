// myName declared here with global scope
let myName = "Carson";


// myName declared here with local scope
function someProcess() {
    let myName = "X-AE-12";
    console.log(myName);
}

// console.log(myName);
// someProcess();

let y = 12;

function scopey() {
    y = 33;
    console.log(y);
}

console.log(y);
scopey();
console.log(y);


let slope = 12;

function varTest() {
    let slope = 56;
    if (true){
        let slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}

varTest();
console.log(slope);