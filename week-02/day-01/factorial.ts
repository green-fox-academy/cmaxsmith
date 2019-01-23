'use strict';
export{};

function factorial (num) {
    let base: number = 1;
    for (let i = 1; i <= num; i++) {
        base = base * i;
    }
    console.log(base);
}
factorial(6)



