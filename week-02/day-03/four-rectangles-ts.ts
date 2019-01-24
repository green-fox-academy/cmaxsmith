'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
//math.random gives something between 0 and 1
//math.floor (size and location)

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

//generates a function that can create a rectangle 'num' amount of times
function rectGen (num) {
  for (let i = 0; i < num; i++){
    ctx.fillStyle = rectColor();
    ctx.fillRect (sizeGenX(), sizeGenY(), sizeGenX(), sizeGenY());
  }
}
//calls the function 
rectGen(4);


