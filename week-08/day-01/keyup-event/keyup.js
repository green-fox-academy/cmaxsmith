// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   1) Subscibe to keyup events on the global window object
//   2) Console log the event object and peek inside
//   3) Display the last pressed key's code as "Last pressed key code is: __"


'use strict';
let header = document.querySelector('h1')

window.addEventListener('keyup', ()=> {
header.innerHTML = `Last pressed key code is:  ${event.which} (${event.key})`
})
