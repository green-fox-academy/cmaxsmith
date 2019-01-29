'use strict';
export{};

let fs = require('fs');

function writeToFile(fileName: string, newContent: string) {
  try {
    fs.readFileSync(fileName);
    fs.writeFileSync(fileName, newContent); 
  } catch (error) {
    console.log(error.message);
  }
}
writeToFile('emptyy.txt', 'Hello Greenfox!');

//use readFileSync to write a new file or overwrite an existing file
//use appendFileSyc to add to an existing file


