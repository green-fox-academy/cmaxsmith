// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   Create an event listener which logs the current timestamp to the console once the button is clicked.
//   When the button is clicked for the second or any other times no event listener should be called.
//   Try to solve this two different ways.
//   hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

'use strict';


let button = document.querySelector('button')
let buttonCounter = 1


//method 1
// button.addEventListener('click', ()=> {
//   let currentDate = Date().toLocaleString("en-US");
//   if (buttonCounter === 1) {
//   console.log(currentDate)
//   buttonCounter++
//   }
// })

//method 2
button.addEventListener('click', ()=> {
  let currentDate = Date().toLocaleString("en-US");
  console.log(currentDate);
  button.disabled = true;
})