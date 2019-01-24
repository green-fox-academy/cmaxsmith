'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



let lineNumber: number = 30;
let emptySpace: number = canvas.height/lineNumber;
let start: number[] = [10, 10];

for (let i = 1; i < lineNumber; i++) {
  ctx.beginPath ();
  ctx.strokeStyle = 'green';
  ctx.moveTo (start[0], start[1] + i * emptySpace);
  ctx.lineTo (start[0] + i * emptySpace, start[1] + emptySpace * lineNumber);
  ctx.stroke();
  ctx.beginPath ();
  ctx.strokeStyle = 'purple';
  ctx.moveTo (start[0] + i * emptySpace, start [1]);
  ctx.lineTo (start[0] + lineNumber * emptySpace, start[1] + i * emptySpace)
  ctx.stroke ();
}