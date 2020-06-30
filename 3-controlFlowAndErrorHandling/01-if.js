let isOn = true;
// ..... some code procedure
if(isOn){
    console.log('The light is on');
}

isOn = false;

if(!isOn){
    console.log('The light is off');
}

let temperature = -50;

if (temperature < 60 && temperature > 40) {
    console.log('Wear a jacket, or maybe a flannel or something');
}

if (temperature < 0){
    console.log('Go inside');
}