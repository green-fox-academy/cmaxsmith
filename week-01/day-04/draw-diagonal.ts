'use strict'
export {}

let lineCount: number = 6;
let border: any = "%";
let space: any = " ";
let numPreSpace: number = 0;
let numAfterSpace: number = (lineCount - 2) - 1;



for (let lineNum = 1; lineNum <= lineCount; lineNum++){ 

    if (lineNum === 1 || lineNum === lineCount){ 
    console.log(border.repeat(lineCount));
    } 
    else if (lineNum != 1 || lineNum != lineCount) { 

        console.log(border+ space.repeat(numPreSpace) + border + space.repeat(numAfterSpace) + border);
        
        numPreSpace++;
        numAfterSpace--;
      }
    }