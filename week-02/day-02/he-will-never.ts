// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable
'use strict';
export {};

let out: string = '';
let notSoCrypticMessage: any[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

for (let i = 0; i < notSoCrypticMessage.length; i++) {
  out += hashmap[notSoCrypticMessage[i]];
}
console.log(out);

//goes through each element of the notSoCrypticMessage using a for loop. When the value of one of these elements matches the key of the hashmap, it adds it to a new string and eventually console.logs the final form.





  







