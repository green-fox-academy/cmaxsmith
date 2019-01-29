// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"
'use strict'
export {};
const fs = require('fs');

//creates function that makes a new file and adds the given text to it
function writeALine (fileName: string, text: string) {
  fs.writeFileSync(fileName, text);
}

//expands on previous function to include error message if it doesn't work
function writeWithError (fileName: string, text: string) {
  try {
    writeALine(fileName, text)
  } catch (error) {
    console.log('Unable to write file: ' + fileName)
  }
}


//input the parameters and initiate the function here
writeWithError('input', 'input')


