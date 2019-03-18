'use strict'

function classToggle () {
  let card = document.getElementsByClassName("card")[0]
  card.classList.toggle('do-flip')

}

let card = document.getElementsByClassName("card")[0]
card.addEventListener("click", ()=> {classToggle()})

