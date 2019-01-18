'use strict'
export{}

let lineCount: number = 8
let ast: any = "*";
let buffer: any = " ";
let astStart: number = 1;
let totalAst: number = lineCount;
let halfway = Math.ceil(lineCount/2);

for (let lineNum: number = 1; lineNum <= lineCount; lineNum++){
  if (lineNum < lineCount/2){
        let bufferNum: any = buffer.repeat(lineCount - lineNum);
        console.log(bufferNum + ast.repeat(astStart));
        astStart = astStart + 2;}

    if (lineNum >= lineCount / 2){
        let bufferNum: any = buffer.repeat(lineCount - halfway);
        console.log(bufferNum + ast.repeat(totalAst));
        totalAst = totalAst - 2;
        halfway = halfway - 1;}
        


        
        
    
}