// 'use strict'

// export function palindrome(string1: string, string2: string) {
//   let arrayIt = string1.split('');
//   let reverseIt = arrayIt.reverse();
//   let anagramIt = reverseIt.join('').toLocaleLowerCase();
//   let lowerCaseIt = string2.toLocaleLowerCase();
//   if (anagramIt == lowerCaseIt) {
//     return true
//   } else {
//     return false
//   }

// }

export function anagram(string1: string, string2: string) {
  let array1a = string1.toLowerCase();
  let array2a = string2.toLowerCase();

  let array1 = array1a.split('');
  let array2 = array2a.split('');
  const whiteList: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let filteredChars1: string[] = array1.filter(char => {
    return whiteList.indexOf(char) > -1;
  })
  let filteredChars2: string[] = array2.filter(char => {
    return whiteList.indexOf(char) > -1;
  })

  let sort1 = filteredChars1.sort();
  let sort2 = filteredChars2.sort();
console.log(sort1)
console.log(sort2)

if (sort1.length !== sort2.length) {
  return false
} else {
  for (let i = 0; i < sort1.length; i++) {
    if (sort1[i] !== sort2[i]) {
      return false
    }

  }
  return true;
  }
}

console.log(anagram('rat a', 'artm'))


