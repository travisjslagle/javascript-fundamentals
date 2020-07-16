
let unorderedList = document.querySelector('ul');
let submitButton = document.getElementById('submit');
let rocketForm = document.querySelector('form');

const baseURL = 'https://api.spacexdata.com/v2/rockets';

let fetchRockets = (event) => {
    event.preventDefault();

    fetch(baseURL)
        .then( response => response.json() )
        .then( json => {
            console.log(json);
            json.forEach( rocket => {
                // NEED: name, cost, mass, image
                // Table row for each rocket
                // td name, cost, mass, image
                // drop the row into the tbody

                let row = document.createElement('tr');

                let name = document.createElement('td');
                let cost = document.createElement('td');
                let mass = document.createElement('td');
                let imageData = document.createElement('td');
                let img = document.createElement('img');
                

                name.innerText = rocket.name;
                cost.innerText = rocket.cost_per_launch;
                mass.innerText = rocket.mass.kg;
                img.src = rocket.flickr_images[0];

                imageData.appendChild(img);

                row.appendChild(name);
                row.appendChild(cost);
                row.appendChild(mass);
                row.appendChild(imageData);

                document.querySelector('tbody').appendChild(row);



            })
        })
        .catch( error => console.error(error));
};

rocketForm.addEventListener('submit', fetchRockets);
















// let myData = [
//     { title: "Downtown Is Loud", author: "Adam" },
//     { title: "My Room Is Hot", author: "Nathan" },
//     { title: "My Neighbors Are Noisy", author: "Alec"},
//     { title: "Boaty McBoat Face", author: "Sheena"},
//     { title: "I Wish I Could Type As Fast As Adam", author: "Sierra"},
//     { title: "Python's Better", author: "Yaboi and Swft"}
// ];

// // Loops over the different statements (obj) inside of myData (array)
// for ( thing of myData ) {
//     // Create the LI that is going to hold the statement (title, author)
//     let mySuperCoolListItem = document.createElement('li');

//     // Create the elements that will display the title and author
//     let myTitle = document.createElement('h3');   // TITLE
//     let myAuthor = document.createElement('p');   // AUTHOR

//     // Give the two elements the values from within the statement object (title, author)
//     myTitle.innerText = thing.title;       // Sets the TITLE
//     myAuthor.innerText = "- " + thing.author;     // Sets the AUTHOR

//     // Adds the li to the ul tag defined in our HTML, where it will be read by a user
//     unorderedList.appendChild(mySuperCoolListItem);

//     // Add the title and author elements into the li
//     mySuperCoolListItem.appendChild(myTitle);
//     mySuperCoolListItem.appendChild(myAuthor);

// }


