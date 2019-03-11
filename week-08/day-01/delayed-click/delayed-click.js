// Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

'use strict';

let button = document.querySelector('button');
let newP = document.createElement('p');


button.addEventListener('click', ()=> {
setTimeout(() => {
  newP.innerText = "2 seconds have elapsed";
  document.body.appendChild(newP)
}, 2000);
})
