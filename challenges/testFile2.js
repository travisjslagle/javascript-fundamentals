let input = "This is a test string."
let splitInput = input.split(" ");


console.log(splitInput);

function capialize() {
    splitInput.forEach(element => {
        element[0] = element[0].toUpperCase();
    });
    console.log(splitInput);
}

capialize();


