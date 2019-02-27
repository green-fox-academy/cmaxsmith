// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   1. store the element that says 'The King' in the 'king' variable.
//   console.log it.
//   2. store 'The Businessman' and 'The Lamplighter'
//   in the 'businessLamp' variable.
//   console.log each of them.
//   3. store 'The King' and 'The Conceited Man'
//   in the 'conceitedKing' variable.
//   alert them one by one.
//   4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//   in the 'noBusiness' variable.
//   console.log each of them.

'use strict'

const king = document.getElementById('b325').innerHTML;
console.log(king);

const businessLamp = document.getElementsByClassName('asteroid big');
console.log(businessLamp);


const conceitedKing = [king, document.getElementsByClassName('asteroid b326')]
console.log(conceitedKing)
alert(conceitedKing[0])
alert(conceitedKing[1][0].innerText)

const noBusiness =  [king, conceitedKing[1][0].innerText, businessLamp[1].innerText]
console.log(noBusiness)
