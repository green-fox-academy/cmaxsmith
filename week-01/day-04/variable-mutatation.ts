'use strict'
export {}

let a: number = 3+10;

console.log(a);

let b: number = 100-7;


console.log(b);

let c: number = 44*2;


console.log(c);

let d: number = 125/5;
// divide d's value by 5

console.log(d);

let e: number = 8**2;
// what's the cube of e's value?

console.log(e);

let f1: number = 123;
let f2: number = 345;
let f1Bigger: boolean = f1>f2
// tell if f1 is bigger than f2 (as a boolean)

console.log (f1 + ' is bigger than ' + f2 +': ' + f1Bigger);

let g1: number = 350;
let g2: number = 200;
let g2DoubleBigger: boolean = (g2*2)>g1
console.log(g2 + ' x 2 ' + 'is bigger than ' + g1 + ': ' + g2DoubleBigger);
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
let hdivisor: boolean = h%11===0
console.log(h + ' is divisible by 11: ' + hdivisor);
// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
let condition1: boolean = i1>(i2**2);
let condition2: boolean = i1<(i2**3);
let higher: boolean = condition1 && condition2;
console.log(i1 + ' is bigger than ' + i2 + '^2 and smaller than ' + i2 + '^3: ' + higher);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
let div3: boolean = j%3===0;
let div5: boolean = j%5===0;
let condition3: boolean = div3 || div5;
console.log(j + ' is divisible by 3 or 5: ' + condition3);
// tell if j is divisible by 3 or 5 (as a boolean)

let k: string = 'Apple';
console.log(k+k+k+k)

// fill the k variable with its content 4 times