'use strict'
export{}

let lineCount: number = 7;
let astNumber: number= 1;

while (lineCount>0){
    let ast: any = "*";
    let buffer: any = " "
    let bufferNum: any = buffer.repeat(lineCount-1);
    console.log(bufferNum + ast.repeat(astNumber));
    lineCount--
    astNumber = astNumber + 2;
}
