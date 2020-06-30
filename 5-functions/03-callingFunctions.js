function hi(){
    console.log('Ayo');
}

// hi();
// hi;
// console.log(hi);
// console.log(hi());


// Create a function that, when invoked, lists out the numbers between 1-10;

function countToTen() {
    for (i=1; i<=10; i++){
        console.log(i);
    }
}

countToTen();


// A note for personal investigation: IIFE  
(function () {console.log('Why is this working')})();