'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let topTri: number[] = [(canvas.width/2), 100];
let btmLeft: number[] = [0, canvas.height];
let btmRight: number[] = [canvas.width, canvas.height]
let numLines: number = 20;
let spaceBtwn: number = canvas.width/numLines;
let ySlope: number = (spaceBtwn/2) * Math.sqrt(2.8);


ctx.moveTo (topTri[0], topTri[1])
ctx.lineTo (btmLeft[0], btmRight[1])
ctx.lineTo (btmRight[0], btmRight[1])
ctx.lineTo (topTri[0], topTri[1])
ctx.stroke();
// let sideBig: number = topTri[0]-btmLeft[0];
// let numSmall: number = 11;
// let space: number =sideBig/numSmall;



// for (let i=0; i < sideBig; i++) {
//   ctx.moveTo (topTri[0] + (i * space), topTri[1] + (i * space));
//   ctx.lineTo (btmLeft[0] + (1.5* i * space), btmLeft[1]);
//   ctx.stroke();
// }
//outline of the triangle
// ctx.moveTo (topTri[0], topTri[1]);
// ctx.lineTo (btmLeft[0], btmLeft[1]);
// ctx.lineTo (btmRight[0], btmRight[1]);
// ctx.lineTo (topTri[0], topTri[1])
// ctx.stroke();

for (let i = 0; i <= numLines; i++) {
  ctx.moveTo (btmLeft[0] + (i*spaceBtwn), btmLeft[1]);
  ctx.lineTo (topTri[0] + (i*spaceBtwn/2), topTri[1] + (i* ySlope));
  ctx.stroke();
}

for (let i = 0; i <numLines; i++) {
  ctx.moveTo (btmLeft[0]+(i*spaceBtwn/2), btmLeft[1]-(i*ySlope));
  ctx.lineTo (btmRight[0]-(i*spaceBtwn/2), btmRight[1] - (i*ySlope));
  ctx.stroke();
}

for (let i = 0; i <= numLines; i++) {
  ctx.moveTo (btmRight[0] - (i * spaceBtwn), btmLeft[1]);
  ctx.lineTo (topTri[0] - (i * spaceBtwn/2), topTri[1] + (i*ySlope));
  ctx.stroke();
}
