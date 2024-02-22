class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person1 = new Person("john", "26", "Male");
const person2 = new Person("Duncan", "28", "Male");

console.log(person1);
console.log(person2.name, person2.age, person2.gender);

class PersonOne {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greeting = function () {
      console.log(`Greeting from ${this.name}`);
    };
  }
}

const person11 = new PersonOne("john", "26", "Male");
console.log(person11.greeting());

class PersonTwo {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greeting() {
    console.log(`Greeting from ${this.name}`);
  }
}

const person12 = new PersonTwo("john smith", "26", "Male");
console.log(person12.greeting());
person12.name = "Uttam Sharma";
console.log(person12.name);
