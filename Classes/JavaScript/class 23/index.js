const getEmailFn = function () {
  console.log(this);
  console.log(`${this.firstName} ${this.lastName}`);
};

const student = {
  firstName: "Adam",
  lastName: "Smith",
  age: 25,
};

const getInfo = function (school, city, sport) {
  console.log(
    `${this.firstName} ${this.lastName} studies 
    in ${school} at ${city} and he likes to play ${sport}`
  );
};

const arr = ["Hyderabad", "City Montisorry School", "Cricket"];

getInfo.call(student, arr[0], arr[1], arr[2]);
getInfo.apply(student, arr);

const reusable = getInfo.bind(student, ...arr);
console.log(reusable);
reusable();
// // student.getEmail();

// const teacher = {
//   firstName: "Rohit",
//   lastName: "Sharma",
//   age: 37,
//   getEmail: getEmailFn,
// };

// teacher.getEmail();

const student1 = {
  firstName: "Adam",
  lastName: "Smith",
  age: 25,
  getEmail: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const teacher1 = {
  firstName: "Rohit",
  lastName: "Sharma",
  age: 37,
};

// teacher1.prototype = student1;
// borrow function

// i want to change this referring to inside student1
//student1.getEmail();
/*
1. call, bind, apply all are solving same problem in different ways
2. if you want to change the context of this keyword in a particular function
 this is referring to then we can use call, apply, bind
*/
// student1.getEmail.call(teacher1);
