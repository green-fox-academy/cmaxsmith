'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
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

function squareGen (num) {
  for (let i = 0; i < num; i++){
  ctx.fillRect (sizeGenX(), sizeGenY(), 50, 50)
  }
}
squareGen(3)

