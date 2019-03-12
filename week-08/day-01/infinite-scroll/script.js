'use strict';


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber = getRandomArbitrary(5, 15)

function divCreator (number){
  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = ('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
    document.body.appendChild(newDiv);
    }
}
divCreator(randomNumber);

window.addEventListener("scroll", ()=> {
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrolled === scrollable) {
    divCreator(10);
  }
})
