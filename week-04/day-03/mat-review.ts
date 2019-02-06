'use strict';
export {};

abstract class Character {
    abstract talk (msg: string): void;
  }

class Human extends Character {
  speed;
  name;

  constructor(pName, pSpeed) {
    super();
    this.speed = pSpeed;
    this.name = pName;
  }
  talk (msg) {
    console.log(msg);
  }

  eat () {
    this.talk(this.name + ' is eating')
  }
  
  walk() {
    this.talk(this.name + ' is eating)')
  };

}

class Robot extends Character {
  talk(msg){
    console.log(msg + 'and I\'m a robot.')
  }
}

interface talk {
  talk();
};

interface walk {
  walk();
};

interface eat {
  eat();
};

interface drive {
  drive();
};

interface wifi {
  wifi();
};

class HumanI implements talk, walk {
  talk (){
    console.log('talk');
  }
  walk() {
    console.log('walk');
  }
}

class RobotI implements talk, drive {
  talk () {
    console.log('talk');
  }

  drive () {
    console.log('drive');
  }
}


