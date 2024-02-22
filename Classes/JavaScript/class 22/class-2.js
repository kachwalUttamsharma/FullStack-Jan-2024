function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const person2 = new Person("Duncan", "28", "Male");

console.log(person2.name, person2.age, person2.gender);
function PersonOne(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.greeting = function () {
    console.log(`Greeting from ${this.name}`);
  };
}

const person = new PersonOne("john", "26", "Male");
console.log(person.greeting());

function PersonTwo(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

PersonTwo.prototype.greeting = function () {
  console.log(`Greeting from ${this.name}`);
};

const person3 = new PersonTwo("john", "26", "Male");

person3.greeting();
