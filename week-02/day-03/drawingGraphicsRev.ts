'use strict'

//boilerplate code = the least amount of code needed to set up a feature
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//ctx lets you access the built-in tools for canvas

ctx.fillStyle = 'pink'; //needs to be before the shape
ctx.fillRect(200, 200, 400, 300);


//roof.. lineto becomes a new origin with each consectutive linto
ctx.moveTo(200, 200); //start here
ctx.lineTo(400, 50); //finish here
ctx.lineTo(600, 200);
ctx.lineTo (200, 200);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();

//Door
ctx.fillStyle = 'red';
ctx.fillRect(300, 300, 100, 200);

//Bushes.. the for loop repeats these bushes
for(let i : number = 0; i <= 700; i = i +100) {
  if (i!==300) {
    ctx.beginPath();
    ctx.arc(i + 50, 500, 50, Math.PI, Math.PI*2); //(starting x position, starting y position, radius, which angle to start, where to end )
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill ();
  } }
