
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';
export{};

let arr: any[] = [1,2,'dog',4];
let test: any[] = ['hi', true, 3213, 'ayyy']

function sum(myArray){
    for (let i = 0; i < arr.length; i++)
    console.log(myArray[i]);
};

sum(arr);
sum(test);