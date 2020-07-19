
let strawWarts = async () => {
  let response = await fetch('https://swapi.dev/api/people/3');
  let arrtoo = await response.json();
  return arrtoo;
}

strawWarts().then(arrtoo => console.log(arrtoo)).then(console.log('this should print last'));