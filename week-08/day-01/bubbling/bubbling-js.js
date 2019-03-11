// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   Here is an image inspector, but the buttons are not implemented yet, that will
//   be your task!
//    - the nav buttons (up, down, left, right) move the background by 10px
//    - the zoom buttons increase/decrease the image by 20%
//    - attach only two event listeners to the nav element
//      - one for navigation
//      - one for zooming


'use strict';

const myNav = document.querySelector('nav');
const myImage = document.querySelector('.img-inspector');

//set the values so you can manipulate them in JS
myImage.style.backgroundSize = `200%`;
let currentRatio = parseInt(myImage.style.backgroundSize);


myImage.style.backgroundPosition = `0px 0px`;
let posX = 0;
let posY = 0;

let navTag = document.querySelector(`nav`);

navTag.addEventListener(`click`, (e) => {
  if (e.target.dataset.direction ===  'right') {
    posX -= 10
    myImage.style.backgroundPosition = `${posX}px ${posY}px`
  } else if (e.target.dataset.direction ===  'left') {
    posX += 10
    myImage.style.backgroundPosition = `${posX}px ${posY}px`
  } else if (e.target.dataset.direction ===  'up') {
    posY += 10
    myImage.style.backgroundPosition = `${posX}px ${posY}px` 
  } else if (e.target.dataset.direction ===  'down') {
    posY -= 10
    myImage.style.backgroundPosition = `${posX}px ${posY}px`
  } else if (e.target.dataset.direction ===  'in') {
    currentRatio *= 1.1;
    myImage.style.backgroundSize = `${currentRatio}%`;
  } else if (e.target.dataset.direction === "out") {
    currentRatio *= .9;
    myImage.style.backgroundSize = `${currentRatio}%`}
  })






