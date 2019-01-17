'use strict'
export {}

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let hoursInADay: number = 24;
let minutesInAnHour: number = 60;
let secondsInAMinute: number = 60;
let secondsInADay: number = secondsInAMinute*minutesInAnHour*hoursInADay;
let secondsPassed: number = (currentHours*minutesInAnHour*secondsInAMinute)+(currentMinutes*secondsInAMinute)+(currentSeconds);
let secondsRemaining: number = secondsInADay - secondsPassed;
console.log('There are ' + secondsInADay + ' seconds in a day.');
console.log('Now, the time is ' + currentHours + ':' + currentMinutes + ':' + currentSeconds + '.');
console.log('This means that ' + secondsPassed + ' have already passed today.');
console.log('Therefore, there are only ' + secondsRemaining + ' remaining for today!!!!');


