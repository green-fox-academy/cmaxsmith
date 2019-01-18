'use strict'
export {}

let lineCount: number = 6;
let border: any = "%";
let space: any = " "


for (let lineNum = 1; lineNum <= lineCount; lineNum++){
    if (lineNum === 1 || lineNum === lineCount){
    console.log(border.repeat(lineCount));
    } else if (lineNum != 1 || lineNum != lineCount){
        console.log(border + space.repeat(lineCount-2) + border);
    }
}

