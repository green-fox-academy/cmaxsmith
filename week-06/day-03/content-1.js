// <!-- You can work in the html or in a separate js file. Like:
// <script>
// 1)  Fill every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.
// </script>
// OR
'use strict';

let fruit1 = document.querySelector('.apple');
console.log(fruit1.innerHTML);

let fruit2 = document.querySelector('.balloon');
console.log(fruit2.innerHTML);

fruit2.innerHTML = fruit2.innerHTML + ' ' + fruit1.innerHTML;

let fruit3 = document.querySelector('.cat');

fruit3.innerHTML = fruit2.innerHTML + ' ' + fruit3.innerHTML;

let fruit4 = document.querySelector('.animals');

fruit4.innerHTML = fruit3.innerHTML + ' ' + fruit4.innerHTML

