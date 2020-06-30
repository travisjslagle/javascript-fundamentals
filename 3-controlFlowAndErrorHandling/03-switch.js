let officeCharacter = 'Pam';

switch (officeCharacter){
    case 'Michael':
        console.log('My mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log('Perfectenschlag');
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica');
        break;
    default:
        console.log(`I'm sorry, ${ officeCharacter }, but do I know you?`);
}


let temperature = 79;

// >90, say "it's hot"
// >50, say "jacket"
// >0, say "coat"

switch (true) {
    case (temperature >= 90):
        console.log("It's hot");
        break;
    case (temperature < 90 && temperature >= 50):
        console.log("You need a jacket");
        break;
    case (temperature < 50 && temperature >= 0):
        console.log("You need a coat");
    default:
        console.log("You are colder than a lot of things");
}
//note: with no break command, you experience 'fall-through' which makes all the cases under your selected case until it hits a break or default