'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let lineNumber: number = 20;
let numberOfSections: number = 16;
let numberOfRows: number = Math.sqrt(numberOfSections);
let emptySpace: number = canvas.height / lineNumber / numberOfRows;

let start: number[] = [10 / numberOfRows, 10 / numberOfRows];

function draw (coordinates: any) {
  for (let i = 1; i < lineNumber; i++) {
    ctx.beginPath ();
    ctx.strokeStyle = 'green';
    ctx.moveTo (coordinates[0], coordinates[1] + i * emptySpace);
    ctx.lineTo (coordinates[0] + i * emptySpace, coordinates[1] + emptySpace * lineNumber);
    ctx.stroke();
    ctx.beginPath ();
    ctx.strokeStyle = 'purple';
    ctx.moveTo (coordinates[0] + i * emptySpace, coordinates [1]);
    ctx.lineTo (coordinates[0] + lineNumber * emptySpace, coordinates[1] + i * emptySpace)
    ctx.stroke ();
  }
}

for (let x: number = 0; x < numberOfRows; x++){
  for (let y: number = 0; y < numberOfRows; y++){
    start[0] === x * (canvas.width / numberOfRows);
    start[1] === y * (canvas.width / numberOfRows);
    draw(start);
  }
}
