// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
'use strict';
export{};

let fs = require('fs')

function ticTacResult(file:string) {
  let fileContent = fs.readFileSync(file, 'utf-8')
  let arr = fileContent.split(/\r\n|\r|\n/)
  console.log(arr[0][2])
}
ticTacResult('win-o.txt')