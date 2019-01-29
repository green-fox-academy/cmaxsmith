'use strict';

import { fileURLToPath } from "url";

export{};
let fs = require('fs');


// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

//creates a function to count the lines of a file
function countLines (fileName: string) {
  let readMe = fs.readFileSync(fileName, 'utf-8');
  let numOflines = readMe.split(/\r\n|\r|\n/).length;
  return numOflines;
}

//creates a function that either returns the lines of a file OR returns 0 if the file doesn't exist
function errorTry (aFile: string) {
  try {
    if (aFile) {
      console.log('There are ' + countLines(aFile) + ' lines in this file');
    }
  } catch (error) {
      console.log('0')
  }
}
    
errorTry('my-file.txt')

