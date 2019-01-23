// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"
'use strict';
export{};


let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

console.log(putSaturn(planetList));

function putSaturn (planetList) {
  let firstPart: string[] = planetList.slice(0,5); //creates a string that includes the first 5 planets of the original string
  let middlePart: string[] = ['Saturn'] //creates a string that includes the missing planet from the original string
  let lastPart: string [] = planetList.slice(5); // creates a string that includes the last 2 planets of the original string
  console.log(firstPart.concat(middlePart).concat(lastPart)) //concatenates all of the newly created strings together
}

