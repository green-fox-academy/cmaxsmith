import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let thing1: Thing = new Thing ('Get Milk');
let thing2: Thing = new Thing ('Remove the obstacles');
let thing3: Thing = new Thing ('Stand Up');
let thing4: Thing = new Thing ('Eat Lunch');

thing3.complete();
thing4.complete();

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);


console.log('To do list: ')
for (let i = 0; i < fleet.things.length; i++) {
  if (fleet.things[i].completed === true) {
    console.log((i+1) + '. [x] ' + fleet.things[i].name )
  } else {
    console.log((i+1) + '. [ ] ' + fleet.things[i].name)
  }
}
