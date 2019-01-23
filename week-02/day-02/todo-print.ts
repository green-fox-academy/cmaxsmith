// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
'use strict';
export {};

let todoText: string = ' - Buy milk\n';
const other: string = ' - Download Games\n    - Diablo';
const title: string = 'My todo: \n'

todoText = title.concat(todoText).concat(other);
console.log(todoText);


