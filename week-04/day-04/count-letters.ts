'use strict';

//takes in the letters of a string and returns the occurences of each letter as an object
function letterCount (string: string) {
  let array = string.split('');
  const whiteList = 'abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const filtered: string[] = array.filter(char => {
    return whiteList.indexOf(char) > -1;
  })
  const numOfChars: object = {};
  filtered.forEach(char => {
    if (typeof numOfChars[char] === 'undefined') {
      numOfChars[char] = 0;
    } 
    numOfChars[char]++
  });

  console.log(numOfChars)

}

// let test = require('tape');

// // test('How many elements?', t => {
// //   t.equal(letterCount('H'), ({ H: 1 }))
// //   t.end();
// // })

letterCount('Hello')