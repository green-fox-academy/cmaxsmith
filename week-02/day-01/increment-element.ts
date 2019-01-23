
// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

'use strict';
export{};

let numList: number[] = [1, 2, 3, 4, 5];

function increment(myArray){
    let element3: number = myArray[2];
    element3 += 1;
    console.log(element3);
}
increment(numList);
