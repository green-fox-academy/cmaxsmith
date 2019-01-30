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

  for (let i = 0; i < arr.length; i++) {
    //checks diagonals
    if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
      console.log('Win ' + arr[0][0])
      return;
    } else if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
      console.log('Win ' + arr[0][2]);
      return;
    }
    //checks horizontals
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      console.log('Win ' + arr[i][0]);
      return
     //checks verticals 
    } else if (arr[0][i] === arr [1][i] && arr[1][i] === arr[2][i]) {
      console.log('Win ' + arr[0][i]);
      return
    } else {
      console.log('Draw')
      return
    }
  }
}
 

ticTacResult('draw.txt')
