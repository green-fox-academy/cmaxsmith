'use strict';
export {};

let myString: string = 'Hello GreenFox';

console.log(myString.charAt(0));
//tells me what character is at the given index position.. in this case 'H'

console.log(myString.replace('GreenFox', 'Astral'));
//lets me replace the first value with the second value. case sensitive

const myAddress: string = '66, Andrassy Road, Budapest, 1145';
const newCountry: string = 'Czech Rep'
const moreInfo: string[] = [' ,England', ',Europe']

function changeString(something: string, country: string[]): any {
  //telling the function to expect a string of something and a string array of a country
  let result: any = '';
  result = something.concat(country[0]);

 // result = something.slice(0,2)
  //cuts out and returns something from first index value to second index value (with format: (x,y) 
  // with one one value (x), begins at the specified index value and returns the rest of it
  // use a negative to work backwords and return after that 
  return result;
}
console.log(changeString(myAddress, moreInfo));
//applies above function to myAddress const

myAddress.substr(3,8)
console.log(myAddress.substr(3,9));
//starts at given index value (x) and returns (y) amount of characters after that

let indexOf = myAddress.indexOf('Budapest')
console.log (indexOf);
// returns the first index value of the given word.. in this case: 19

console.log(myAddress.concat(', Hungary'));
//concat function adds to a string

console.log(...moreInfo);
// ' ... ' makes a string from the given variable

const myName: string = 'Max Smith'
console.log(
  myName.split(' ').join(':')
);
//you can split a string of text into an array, separated by the specified character
//does not include the specified character in elements
// (x, y) x=use this value as a separator. y = # of specified separators to search for
//.join method results in a new string JOINED by the specified character

let matrix: number[][] = 
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(matrix[0][0]);

for (let i: number = 0; i < matrix[0].length; i++) {
  for (let j: number = 0; j < matrix[0].length; j++) {
    console.log(matrix[i][j]);
  }
}
matrix.forEach(row => {
  row.forEach(value => {
    console.log;
  }
    )
})
//another way to write the same above function without the => (arrow function)

matrix.forEach(function(row) {
  row.forEach(function(value) {
    console.log(value);
  })
})

//adding more rows to the array
matrix.push([1, 2, 3]);
console.log(matrix);
//adding more values to just one element of a multidimensional array

//object notes begin here

let myObject = {
  number: 66,
  street : 'Andrassy Road',
  city : 'Budapest',
  postcode : 1175
}
console.log(myObject.street);
//you can access these key values with myObject.keyName

console.log(Object.keys(myObject));
//gives back an array that's only the keys of the object specified in the parentheses

console.log(Object['values'](myObject));
//gives back an array of the key VALUES from the specified objects

console.log(myObject.hasOwnProperty('street'));
//returns a boolean to ask if an object has a key of a certain value 





