// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   On the click of the button,
//   Count the items in the list
//   And display the result in the result element.
// </script>
// OR
// <script src="events-2.js"></script> -->

'use strict';

let countResult = document.querySelector('.result')

let button = document.querySelector('button')

button.addEventListener('click', () => listCounter())

function listCounter() {
  let list = document.querySelectorAll('li')
  countResult.innerHTML = list.length

}
