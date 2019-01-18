'use strict'
export {}

let lineCount: number = 8;
let blackWhite: any = "% ";
let whiteBlack: any = " %";
let numOfTimes: number = lineCount/2;

for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++){ 
    if (lineNumber%2==0) {
        console.log(blackWhite.repeat(numOfTimes));
    } else if (lineNumber%2!=0){
        console.log(whiteBlack.repeat(numOfTimes));
    }

}