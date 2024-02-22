function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("greeting from " + this.name);
};

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log(`${this.name} studies in ${this.grade}`);
};

const person = new Person("John", 26);
const person2 = new Person("Uttam", 28);
const student = new Student("Sambit", "24", "10");

//console.log(Person.compareAges(person, person2));

console.log(Person.name);
console.log(Person.age);
