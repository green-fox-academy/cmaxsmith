'use strict'
export{}

let a: number = 24;
let out: number = 0;

if (a%2==0){console.log(++out)};

// if a is even increment out by one

let b: number = 21;
let out2: string = ''
let condition1: boolean = b >= 10;
let condition2: boolean = b <= 20;
let condition3: boolean = b < 10;
let condition4: boolean = b > 20;

if (condition1 && condition2){
    out2 = "Sweet!"
    console.log(out2)} 
    else if (condition3){
        out2 = "Less!"
    console.log(out2)}
     else if (condition4) {
        out2 = "More!"
    console.log(out2)
    };

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && !isBonus){
    let newBonus: number = c-2
    console.log('The bonus is ' + newBonus)}
     else if (credits < 50 && !isBonus){
     let newBonus: number= c-1
     console.log('The bonus is ' + newBonus)}
     else if (isBonus){
         console.log('The bonus is ' + c)};


// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

let d: number =  8;
let time: number = 120;
let out3: string = '';

if (d%4===0 && time<=200){
    out3 = "check";
    console.log(out3)
} else if (time>200){
    out3 = "Time Out";
    console.log(out3)
} else {out3 = "Run Forest Run!"
console.log(out3)};

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"