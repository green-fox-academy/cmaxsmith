'use strict';
export{};


function pigLatin (string) { 
  let bigArr: any[][] = []; 
  let arrayOfWords = string.split(' '); // 
  let anotherArray = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    bigArr[i] = arrayOfWords[i].split('');
    let indexLength: number = bigArr[i].length;
    for (let j = 0; j < bigArr[i].length; j++) {
      bigArr[i][indexLength] = bigArr[i][0];
    }
    bigArr[i].shift(); 
    bigArr[i].push('a', 'y', ' '); 
    anotherArray += bigArr[i].join('')
   }
    return anotherArray
}
console.log(pigLatin(''))