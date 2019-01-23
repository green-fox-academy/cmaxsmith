// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"
'use strict';
export{};

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

let whereAreYou = quote.indexOf('you'); //where does the first 'you' start?

let firstThird = quote.substr(0, whereAreYou); // creates the first part of the string between beginning 0 and before you starts

let whereIsExpect = quote.indexOf('expect') //locates the index value of before expect

let secondThird : string = "always takes longer than "; //the string we need to insert into the quote

let thirdThird = quote.substr(whereIsExpect-4, quote.length) //locates the beginning of the final thirds (you...) and goes until the last index 

quote = firstThird.concat(secondThird).concat(thirdThird); //join all the thirds together
console.log(quote);

