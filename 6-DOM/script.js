console.log('LOADED FILE!');



let myPTag = document.getElementById('testParagraph');

myPTag.style.color = 'blue';

console.log(document.querySelectorAll('p.sampleClass'));

document.querySelectorAll('p.sampleClass')[0].innerText = "My text has changed!";

let toChange = document.querySelectorAll('p.sampleClass');

toChange.forEach(tag =>{
    tag.innerText = "<h1>Hendrix</h1>";
}) 

let myButton = document.getElementById('clickThisButton');

//changes the button color to red, then to blue if clicked again
myButton.addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red'){
        event.target.style.backgroundColor = "blue"
    }
    else {
        event.target.style.backgroundColor = "red"
    }
})

myButton.addEventListener('mouseover', event => {
    event.target.style.fontSize = '30px';
})

let userInput;

document.getElementById('nameInput').addEventListener("keyup", event => {
    userInput = event.target.value;
    document.getElementById("theValue").innerText = userInput;
})


// in the HTML, create a button with a unique ID, and a p tag with a unique ID
// When the button is clicked, the p tag should read, 'HEY THE BUTTON WAS CLICKED!'
// When the P tag is clicked, the text inside should say "Hey, no pushing!"


document.getElementById('loggedButton').addEventListener("click", event => {
    document.getElementById('buttonLogger').innerText = "HEY THE BUTTON WAS CLICKED!!"
})

document.getElementById('buttonLogger').addEventListener('click', event => {
    document.getElementById('buttonLogger').innerText = "Hey, no pushing!"

})