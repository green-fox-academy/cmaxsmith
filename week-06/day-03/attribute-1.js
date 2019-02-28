
      // Write the image's url to the console.
      // Replace the image with a picture of your favorite animal.
      // Make the link point to the Green Fox Academy website.
      // Disable the second button.
      // Replace its text with 'Don't click me!'.
'use strict';

const animalPic = document.querySelector('img')
const link = document.querySelector('a')
const button2 = document.querySelectorAll('button')

console.log(animalPic.getAttribute('src'))
console.log(link.getAttribute('href'))

animalPic.setAttribute('src', 'dolphin.jpg')
animalPic.width="300"

link.setAttribute('href', 'http://www.greenfoxacademy.com')

button2[1].setAttribute('disabled', true)
button2[1].innerHTML = `Don't click me!`


