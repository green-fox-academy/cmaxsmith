'use strict';

function btnMaker (number){
let body = document.querySelector('body');
let button = document.createElement('button');
button.innerText=`button${number+1}`
body.appendChild(button)
}

for(let i=0; i<5; i++){
  btnMaker(i)
}

let buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{
  button.addEventListener("click", ()=>{
    alert(button.innerText)
  })
})


