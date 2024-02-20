"use strict";

// simple console log
// console.log(this); -> empty object

// this inside function -> points to undefined
function test() {
  console.log(this);
}
// test();

// this keyword is inside an object itself
const obj = {
  name: "adam",
  age: 32,
  getPrintInfo: function () {
    console.log(this.name + " " + this.age);
  },
};

// obj.getPrintInfo();

// this keyword from a function that is inside a function
// inside an object

const obj2 = {
  name: "steve",
  age: 26,
  testFunction: function () {
    function g() {
      console.log(this);
      console.log(this.name + " " + this.age);
    }
    g();
  },
};
obj2.testFunction();
