'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

//generates a random RGB value
function redGB () {
  let value: number = (Math.random () * 255);
  value = Math.floor(value)
  return value
}

generates a random RGB code 
function rectColor () {
  let randomColorcode= 'rgb('+ redGB()+', ' + redGB() + ', ' + redGB() + ')';
  return randomColorcode
  }

function squareGen (squareSize) {
  for (let i = 0; i < 20; i++) {
  ctx.fillStyle = rectColor();
  ctx.fillRect ((canvas.width/2)-(squareSize/2) + (i*20), canvas.height/2-(squareSize/2) + (i * 20), squareSize - (i*20), squareSize - (i*20));
  }
}

squareGen (canvas.height);
