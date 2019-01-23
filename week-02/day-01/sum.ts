// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
'use strict';
export{};

let arr: number[] = [1,2,3,4];
let base: number = 0;

function sum(x){
    for (let i = 0; i < x+1; i++) //why does my value have to be x + 1 here?
    base += arr[i];
    console.log(base);

};
sum (3);






