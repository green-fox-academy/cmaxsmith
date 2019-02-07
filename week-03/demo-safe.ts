function characterFinder (string: string) {
  let array : number [] = []
  for (let i = 0; i < string.length; i++) {
    array.push(string.charCodeAt(i))
  }
  return array
}

let letterValues = characterFinder(sentence);

//converts ascii numbers into a string
function crypt (values, number) {
  for (let i = 0; i < values.length; i++) {
    values[i] = String.fromCharCode(values[i] + number);
  }
  return values.join('');
}
console.log(crypt(letterValues, 1))


function pigLatin (string) { 
  let bigArr: any[][] = [];
  let arrayOfWords = string.split(' ');
  let anotherArray = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    bigArr[i] = arrayOfWords[i].split('');
    let indexLength: number = bigArr[i].length;
    for (let j = 0; j < bigArr[i].length; j++) {
      bigArr[i][indexLength] = bigArr[i][0];
    }
    bigArr[i].shift(); //takes deletes the first letter of the word
    bigArr[i].push('a', 'y', ' '); //adds [a] [y] to the end of the word
    anotherArray += bigArr[i].join('')
    // for (let i = 0; i < bigArr.length; i++) {
      //   let word = bigArr[i].join('');
      //   console.log(word)
      
    }
    return anotherArray
}
