// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()

class Teacher {
  answer() {
    console.log('The teacher answered the question.');
    
  }
  teach(student: Student) {
    console.log('The teacher taught a lesson.');
    student.learn();
  }
}


class Student {
  learn() {
    console.log('The student learned the lesson.');
  }
  question(teacher: Teacher) {
    console.log('The student asked a question.');
    teacher.answer();
  }
}

const teacher1: Teacher = new Teacher;
const student1: Student = new Student;

student1.question(teacher1);
teacher1.teach(student1);

