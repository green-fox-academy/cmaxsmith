// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict'
export {};
const fs = require('fs');

//creates an array of a text file based on line breaks
let newArray = fs.readFileSync('log.txt', 'utf-8');
let splitArray = newArray.split(/\r\n|\r|\n/);
let emptyArray1 = []; // array of the IP Address
let emptyArray2 = []; // array of all the gets and pushes
let emptyArray3 = []; //array of all the GETS


//extracts only the IP Addresses from the array
for (let i = 0; i < splitArray.length; i++) {
  let ipAddress = splitArray[i].slice(27, 38);
  emptyArray1.push(ipAddress);
}
// console.log(emptyArray1)

//extracts the get/push from the array
for (let i = 0; i < splitArray.length; i++) {
  let ipAddress = splitArray[i].slice(41,44);
  emptyArray2.push(ipAddress);
}
// console.log(emptyArray2)
for (let j = 0; j < emptyArray2.length; j++) {
  if (emptyArray2[j] === 'GET') {
    emptyArray3.push(emptyArray2[j])
  }
}

let numOfGet = emptyArray3.length
let numOfPost = emptyArray2.length - emptyArray3.length;
console.log('The ratio of get to posts is: ' + numOfGet + ':' + numOfPost)




