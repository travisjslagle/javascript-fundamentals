// FAT ARROW FUNCTION

let fatArrow = () => {
    console.log("I reside in the NEW way of writing functions.");
}

fatArrow();


let conciseBody = () => console.log('I am concise');

conciseBody();

// Concise body only allows a single statement in the function body;
  //It also has an implied return


    // let testMyLimites = () => let y =4;
    // y += 5;
    // console.log(y);  


// Block body allows for multiple line statements;
  //Manual return necessary
  
let blockBody = () => {
    let y = 0;
    y += 4;
    console.log(y);
}

blockBody();