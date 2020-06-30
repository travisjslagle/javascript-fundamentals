// If-Else

let temperature = 75;

if(temperature < 65){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}

let userName;
let myName = 'Travis';

if(userName == myName){
    console.log('Hello, my name is also ' + myName);  //could do: console.log(`Your name is ${userName}`);
}
else{
    //console.log('Hello, is your name ' + myName + '?');
    console.log(`Hello, is your name ${ myName }?`);   //known as interpolation
}

// ifElse

let age = 14;

// Older than 25, say "Yay! You can rent a car!"
// Older than 21, but not 25, say "Hey, you can purchase alcohol"
// Older than 18, but not 21, say "Hey, you can vote!"
// Younger than 18, say "You can do stuff one day";

if(age >= 25){
    console.log("Yay! You can rent a car.");
}
else if(age >= 21){
    console.log("Hey, you can purchase alcohol.");
}
else if(age >= 18){
    console.log("Hey, you can vote!");
}
else {
    console.log("You can do stuff one day");
}