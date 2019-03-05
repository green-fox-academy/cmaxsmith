'use strict';
let pageCounter = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };

ourRequest.send();
});

function renderHTML(data) {
  let htmlString = "";

  for(let i = 0; i <data.length; i++){
    htmlString += "<>" + data[i].name + " is a " + data[i].species + "that likes to eat"
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString );
  pageCounter++;

  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
}




