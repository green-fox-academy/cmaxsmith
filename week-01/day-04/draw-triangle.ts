'use strict';
export {};

let lineCount: number = 4; //How many lines?
let starCount: any = lineCount - (lineCount - 1); // number of stars per line

//when the number of stars is between 1 and the number of lines
while (starCount > 0 && starCount <= lineCount) {
    let asterisk: any = '*';
    console.log(asterisk.repeat(starCount));
    starCount++;
};