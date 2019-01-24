'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

//generates a random y value that is smaller than the height of the canvas
function sizeGenY () {
  let yValue: number = Math.floor((Math.random()*canvas.height)/2);
  return yValue
}

//generates a random x value that is smaller than the width of the canvas
function sizeGenX () {
  let xValue: number = Math.floor((Math.random()*canvas.width)/2);
  return xValue;
}

function redGB () {
  let value: number = (Math.random () * 255);
  value = Math.floor(value)
  return value
}

//generates a random RGB code 
function rectColor () {
  let randomColorcode= 'rgb('+ redGB()+', ' + redGB() + ', ' + redGB() + ')';
  return randomColorcode
  }

function squareGen (squareSize) {
  ctx.fillStyle = rectColor();
  ctx.fillRect (canvas.width/2-(squareSize/2), canvas.height/2-(squareSize/2), squareSize, squareSize);
}

for (let i = 0; i < 3; i++) {
  squareGen(sizeGenY());
}

