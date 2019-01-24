// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
'use strict';
export {};
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches (girls: string[], boys: string[]) {
  let everybody: any [] = [];
  let length: number = 0;
  if (boys.length < girls.length) {
    length = boys.length;
  } else {
    length = girls.length;
  }
  for (let i = 0; i < length; i++) {
    if (boys.length > girls.length){ //this if - else part allows for all the names to be included

      everybody = everybody.concat([girls[i], boys[i], boys[boys.length-1]]);
    } else {
      everybody = everybody.concat([girls[i], boys[i], girls[girls.length-1]]);
    } 
  }
  return everybody;
}

console.log(makingMatches(girls, boys));
