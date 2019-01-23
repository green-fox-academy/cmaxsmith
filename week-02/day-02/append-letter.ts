// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
'use strict';
export{};


let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
let newString: string[] = [];

function appendA(input: string[]) {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].concat('a');
    input.push[(input[i])];
  }
  return input
}

console.log(appendA(far));
