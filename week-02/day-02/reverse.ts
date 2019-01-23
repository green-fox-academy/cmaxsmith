'use strict';
export {};
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: any = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
// let forward: any = '';

// for (let i = reversed.length; i >= 0; i--) {
//   forward =+ reversed.charAt[i];
// }
// console.log(forward);
  

reversed = reversed.split(''); // divides each character as an individual element of an array
reversed = reversed.reverse(); // reverses the order of the array
reversed = reversed.join(''); // rejoins the array as a string, using an empty space as a separator 
console.log(reversed);







