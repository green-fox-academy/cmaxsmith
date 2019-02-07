let sentence: string = 'Hello';


//converts a string into ascii numbers
function characterFinder (string: string) {
  let array : number [] = []
  for (let i = 0; i < string.length; i++) {
    array.push(string.charCodeAt(i))
  }
  return array
}

let letterValues = characterFinder(sentence);
// console.log(letterValues);

// converts ascii numbers into an encrypted array of numbers
function crypt1 (values, number) {
  let array: any = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] == 32) {
      array.push(values[i]);
    } else {
      array.push(values[i]+number); }
  } return array; 
}

// console.log(crypt1(letterValues, -1))

let cryptedArray = crypt1(letterValues, -1)
console.log(cryptedArray)

function crypt2 (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = String.fromCharCode(array[i]);
  } return array.join('');
}

let cryptedSentence = crypt2(cryptedArray)

console.log(cryptedSentence);