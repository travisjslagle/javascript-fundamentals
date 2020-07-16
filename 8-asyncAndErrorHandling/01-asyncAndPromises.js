

// The PROMISE constructor function takes 1 argument: a callback function that takes 2 parameters
// Callback Fn: The first parameter will contain a function to run when the promise is resolved (cb from the .then(cb))
// Callback Fn: The second parameter will contain the function to run when the promise is rejected (cb from the .catch(cb))
// A PROMISE IS ASYNC BY NATURE
let superCoolPromise = new Promise((resolve, reject) =>{
    resolve(42);
    reject('Array indices start at 1');
});

superCoolPromise.then(something => console.log(something)).catch(err => console.error(err));


let fetchie = (url) => {
    return new Promise((resolve, reject) => {
        if (url == 'https://supercoolwebsite.io') {
            resolve(['abc', 123]);
        }
        else {
            let myError = new Error('Ya done goofed!');
            reject(myError);
        }
    })
}

fetchie('https://supercoolwebsite.io').then(response => console.log(response)).catch(err => console.error(err));


// This is not asyncronous, so runs before any async functions (e.g. Promises):
console.log('Did this break?');


// async keyword makes this an asyncronous function -- allows you to use await keyword
// await keyword: gives the ability to hook into the asyncronous functionality -- replaces .then() & .catch()
async function letsTalkAboutASYNC () {

    // This appears to be similar to a ternary -- try {} and if there is a rejection in the promise catch {}
    try {
        let response = await fetchie('https://supercoolwebsite.io');
        console.log(response);

        throw new Error('Yeeted out of there');
    }
    catch (e) {
        console.log(e);
    }
}

letsTalkAboutASYNC();
console.log('Yeet');