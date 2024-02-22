// parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("greeting from " + this.name);
  }

  static compareAges(person1, person2) {
    if (person1.age > person2.age) {
      return `${person1.name} is older than ${person2.name}`;
    } else if (person1.age < person2.age) {
      return `${person1.name} is younger than ${person2.name}`;
    } else {
      return `${person1.name} and ${person2.name} are of same age`;
    }
  }
}

// child class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} studies in ${this.grade}`);
  }
}

const person = new Person("John", 26);
const person2 = new Person("Uttam", 28);
const student = new Student("Sambit", "24", "10");

//console.log(Person.compareAges(person, person2));

console.log(Person.name);
console.log(Person.age);
