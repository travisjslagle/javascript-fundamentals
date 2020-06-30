// ---This block works---
// let favMovie = {
//     nameOfMovie: "Monty Python and the Holy Grail",
//     runTime: 92,
//     characters: [{charOne: {name: 'King Arthur', age: 37, items: ['Excalibur', 'Holy Hand Grenade of Antioch']}},
//                  {charTwo: {name: 'Tim the Enchanter', age: 65, items: ['Fireball Staff', 'Rabbit-Bait']}}
//     ]
//   }
//   let movieStats = function (movie){
//     console.log(movie['nameOfMovie']);
//     console.log(movie['runTime']);
//     console.log(movie['characters'][0]['charOne']);
//     console.log(movie['characters'][1]['charTwo']);  
// }
  
//   movieStats(favMovie);
// ---End of working block---


let favMovie = {
    nameOfMovie: "Monty Python and the Holy Grail",
    runTime: 92,
    characters: [{charOne: {name: 'King Arthur', age: 37, items: ['Excalibur', 'Holy Hand Grenade of Antioch']}},
                 {charTwo: {name: 'Tim the Enchanter', age: 65, items: ['Fireball Staff', 'Rabbit-Bait']}}
    ]
  }
  let movieStats = function (movie){
    console.log(movie['nameOfMovie']);
    console.log(movie['runTime']);
    console.log(movie['characters'][0]['charOne']);
    console.log(movie['characters'][1]['charTwo']);  
}
  
  movieStats(favMovie);