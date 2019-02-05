'use strict';
export{};

class Person {
  name: string;
  age: number;
  gender: string;

  constructor (
    n: string = 'Jane Doe', 
    a: number = 30, 
    g: string = 'female'
    ) {
    this.name = n;
    this.age = a;
    this.gender = g;

  }

  public introduce (): any {
    console.log(`Hi, I\'m ${this.name} and I\'m a ${this.age} year-old ${this.gender}.`)
  }

  public getGoal (): any {
    console.log(`My goal is: Live for the moment!`)
  }
}

const person1: Person = new Person('Bela', 15, 'male');

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor (
  n: string = 'Jane Doe',
  a: number = 30, 
  g: string = 'female',
  pO: string = 'The School of Life',
  sD: number = 0,
  ) {
    //super calls back the parent class constructor 
  super(n, a, g);

  this.previousOrganization = pO;
  this.skippedDays = sD;
  }

  public getGoal (): any {
    super.getGoal();
    console.log(`Be a software developer`)
  }

}

const student1: Student = new Student;

student1.getGoal()