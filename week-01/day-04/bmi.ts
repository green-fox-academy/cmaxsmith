'use strict'

let massInKg: number= 65
let heightInM: number= 1.78
let bmiLong: number= massInKg/heightInM/heightInM
let bmiShort = bmiLong.toFixed(1)


console.log('I weigh '+ massInKg + ' kilograms');
console.log('I am ' + heightInM + ' meters tall');
console.log('This means that my BMI is ' + bmiShort + "%" );
