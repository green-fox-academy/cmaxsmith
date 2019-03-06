// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

'use strict';

let displaySection = document.getElementsByClassName('display')[0]
let buttonText = document.getElementsByTagName('button')[0]
console.log(buttonText.innerHTML)

function saveDay() {
  buttonText.innerHTML = "Bomb defused"
}

buttonText.addEventListener("click", saveDay )


function countDown(number1) {
  displaySection.innerHTML = number1;
};


for (let i = 0; i <= 10; i++){
  setTimeout(()=>countDown(10-(i)), i*1000)
};

setTimeout(()=>{
  buttonText.innerHTML = "Bomb exploded"
}, 10000);








