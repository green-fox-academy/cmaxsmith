'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let topTri: number[] = [(canvas.width/2), 0];
let btmLeft: number[] = [0 + (canvas.width/4), canvas.height/2];
let btmRight: number[] = [canvas.width - (canvas.width/4), canvas.height/2];
let sideBig: number = topTri[0]-btmLeft[0];
let numSmall: number = 11;
let space: number =sideBig/numSmall;

for (let i=0; i < sideBig; i++) {
  ctx.moveTo (topTri[0] + (i * space), topTri[1] + (i * space));
  ctx.lineTo (btmLeft[0] + (1.5* i * space), btmLeft[1]);
  ctx.stroke();
}
//outline of the triangle
// ctx.moveTo (topTri[0], topTri[1]);
// ctx.lineTo (btmLeft[0], btmLeft[1]);
// ctx.lineTo (btmRight[0], btmRight[1]);
// ctx.lineTo (topTri[0], topTri[1])
// ctx.stroke();

