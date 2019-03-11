// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

'use strict';

let createCandiesBtn = document.querySelector('.create-candies')
let candies= document.querySelector('.candies')
let candiesNumber = Number(candies.innerText)
let candyRate = 1;
let candyTime = 0;


createCandiesBtn.addEventListener("click", ()=> {
    candiesNumber = candiesNumber + candyRate;
    candies.innerText = candiesNumber;

})

let lollipopBtn = document.querySelector('.buy-lollypops');
let lollipopCount = document.querySelector('.lollypops');

lollipopBtn.addEventListener("click", ()=>{
  if (candiesNumber > 99) {
    candiesNumber = candiesNumber - 100;
    candies.innerText = candiesNumber;
    lollipopCount.innerText += '🍭';
  }
})

let makeItRain = document.querySelector('.candy-machine')
makeItRain.addEventListener("click", ()=>{
  candyRate = candyRate * 10;
})

let speed = document.querySelector('.speed');

setInterval(()=> {
  candyTime++
  speed.innerText = Math.floor(candiesNumber/candyTime)

  if ((lollipopCount.innerText.length/2)>=10) {
    candiesNumber++
    candies.innerText = candiesNumber;
  }
}, 1000)