
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable

'use strict';
export{};

let lines: number = 5;
let matrixArr: number[][] = [];
let o: string = '';

for (let i: number = 0; i < lines; i++) {
    o = '';
    matrixArr[i] = [];
    for (let j: number = 0; j < lines; j++){
      if (j === lines - 1 -i){
          matrixArr[i][j] = 1;
      } else {
        matrixArr[i][j] = 0;
      }
    o += matrixArr[i][j];
    }
    console.log(o);
}