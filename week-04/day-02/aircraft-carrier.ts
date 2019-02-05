'use strict';
export {};

class Aircraft {
  ammoStore: number
  maxAmmo: number;
  baseDamage: number;
  type: string;
  priority: boolean;

  constructor (aS: number = 0) {
    this.ammoStore = aS;
  }

  refill (num) {
    if (num - this.maxAmmo > 0) {

      this.ammoStore += (this.maxAmmo - this.ammoStore)
      return num - this.ammoStore;
    } else {
      this.ammoStore += num;
      return 0;
    }
  }
  
  getType () {
    console.log(`This aircraft is a(n) ${this.type}`)
  }

  fight () {
    let damage = this.baseDamage * this.ammoStore;
    this.ammoStore = 0;
    return damage;
  }

  getStatus () {
    console.log(`Type: ${this.type}, Ammo: ${this.ammoStore}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage*this.ammoStore}`)
  }

  isPriority() {
    console.log(this.priority)
  }
}

class F15 extends Aircraft {

  constructor (mA: number = 8, bD: number = 50, t: string = 'F15', p: boolean = false) {
    super();
    this.maxAmmo = mA;
    this.baseDamage = bD;
    this.type = t;
    this.priority = p;
  }
}

class F35 extends Aircraft {
  
  constructor ( mA: number = 12, bD: number = 50, t: string = 'F35', p: boolean = true) {
    super();
    this.maxAmmo = mA;
    this.baseDamage = bD;
    this.type = t;
    this.priority = p;
   
  }
}

const plane1: F15 = new F15 ()
const plane2: F35 = new F35 ();

class Carrier {
  
}




