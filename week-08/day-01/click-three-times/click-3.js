// Create a simple HTML document with one button.

// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:

// 5 seconds elapsed and clicked 3 times

// If the user starts clicking before the first 5 seconds, nothing should be printed

let button = document.querySelector('button');
let newP = document.createElement('p');
let clickCount = 1;

let header = document.querySelector('h1');
setTimeout(()=>{
  
})


setTimeout(()=> {
button.addEventListener("click", ()=>{
  if (clickCount === 3) {
    newP.innerText = "5 seconds elapsed and clicked 3 times"
    document.body.appendChild(newP)
  }
  clickCount++
console.log(clickCount)
})
}, 5000)
