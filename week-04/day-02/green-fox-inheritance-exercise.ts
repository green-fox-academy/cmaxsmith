'use strict';
export{};

class Person {
  name: string;
  age: number;
  gender: string;

  constructor (n: string = 'Jane Doe', a: number = 30, g: string = 'female') {
    this.name = n;
    this.age = a;
    this.gender = g;
  }

  introduce (): any {
    console.log(`Hi, my name is ${this.name}, a ${this.age} year-old ${this.gender}`)
  }

  getGoal (): any {
    console.log(`My goal is: Live for the moment!`)
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor (n?: string, a?: number, g?: string, pO: string = 'The School of Life', sD: number = 0) {
    super(n, a, g);
    this.previousOrganization = pO;
    this.skippedDays = sD;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year-old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
  }

  getGoal () {
    console.log(`My goal is: Be a junior software developer`);
  }

  skipDays (numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  level: string;

  constructor(n?: string, a?: number, g?: string, l: string = 'intermediate') {
    super(n, a, g);
    this.level = l;
  }

  getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers.`)
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year-old ${this.gender} ${this.level} mentor.`)
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;

  constructor(n?: string, a?: number, g?: string, c: string = 'Google') {
    super(n, a, g);
    this.company = c;
  }
  
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year-old ${this.gender} who represents ${this.company} and ${this.hiredStudents} students so far.`)
  }

  hire() {
    this.hiredStudents += 1;
  }

  getGoal () {
    console.log('My goal is: Hire brilliant junior software developers')
  }
}

class Cohort extends Person {
  name: string;
  students: string[] = [];
  mentors: string[] = [];

  constructor (cohort: string) {
    super();
    this.name = cohort;
  }

  addStudent (student) {
    this.students.push(student);
  }

  addMentor (mentor) {
    this.mentors.push(mentor);
  }

  info () {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
