'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let numberOfLines: number = 12;
let emptySpace: number = canvas.height/numberOfLines/2;
let midPoint: number [] = [canvas.height/2, canvas.width/2];

ctx.strokeStyle = 'rgb(57, 255, 20)';


for(let i = 0; i < numberOfLines; i++){
ctx.moveTo (midPoint[0], midPoint[1] - (i * emptySpace)-10);
ctx.lineTo (0 + emptySpace*i, midPoint[1]);
ctx.stroke();
}

for (let i = 0; i < numberOfLines; i++) {
  ctx.moveTo (midPoint[0], midPoint[1] - (i * emptySpace)-10);
  ctx.lineTo (canvas.height - (i * emptySpace), midPoint[1]);
  ctx.stroke();
}

for (let i = 0; i < numberOfLines; i++) {
  ctx.moveTo (midPoint[0], midPoint[1] + (i * emptySpace)+10)
  ctx.lineTo (0 + emptySpace*i, midPoint[1])
  ctx.stroke();
}

for (let i = 0; i < numberOfLines; i++) {
  ctx.moveTo (midPoint[0], midPoint[1] + (i * emptySpace)+10);
  ctx.lineTo (canvas.height - (i * emptySpace), midPoint[1]);
  ctx.stroke();
}