// oops -> java, python, c++ -> class, object -> inheritance, abstraction,
// polymorphism, encapsulation
// functional -> Javascript, also supports oop
// (behind the scenes its functional programming)
// procedural -> sql, c - top to bottom level of execution

// callback
// callback me later

// function printFirstName(name) {
//   console.log(name);
// }

// function printLastName(name) {
//   console.log(name);
// }
// // DRY -> Dont repeat yourself
// console.log(printFirstName("hemangi"), printLastName("pawar"));

//A callback function is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some sort action.

// HOF -> Higher order function
// Any function that takes in a function or returns one out is a higher-order function
// function printFullName(name, callbackFn) {
//   return callbackFn(name);
// }

// function printname(name) {
//   console.log(name);
// }

// console.log(
//   printFullName("hemangi", printname),
//   printFullName("pawar", printname)
// );

// printfullname -> higher order function
// printname -> callbackfn

// --------------------------------------------------------------------

// radius of different circles
const myRadiusArr = [2, 3, 5, 6, 7, 8];

// find for each circle area, circumference, and diameter

// v1
// function calculateArea(myRadiusArr) {
//   let result = [];
//   for (let i = 0; i < myRadiusArr.length; ++i) {
//     result.push(3.14 * myRadiusArr[i] * myRadiusArr[i]);
//   }
//   return result;
// }

// function calculateCircumference(myRadiusArr) {
//   let result = [];
//   for (let i = 0; i < myRadiusArr.length; ++i) {
//     result.push(2 * 3.14 * myRadiusArr[i]);
//   }
//   return result;
// }

// function calculateDiameter(myRadiusArr) {
//   let result = [];
//   for (let i = 0; i < myRadiusArr.length; ++i) {
//     result.push(2 * myRadiusArr[i]);
//   }
//   return result;
// }

// console.log("area : " + calculateArea(myRadiusArr));
// console.log("circumference : " + calculateCircumference(myRadiusArr));
// console.log("diameter : " + calculateDiameter(myRadiusArr));

// v2
// calculate is HOF
function calculate(myRadiusArr, callback) {
  let result = [];
  for (let i = 0; i < myRadiusArr.length; ++i) {
    result.push(callback(myRadiusArr[i]));
  }
  return result;
}

function calculateArea(radius) {
  return 3.14 * radius * radius;
}

function calculateDiameter(radius) {
  return 2 * radius;
}

function calculateCircumference(radius) {
  return 2 * 3.14 * radius;
}

// callback -> calculateArea, calculateDiameter, calculateCircumference
console.log("area : " + calculate(myRadiusArr, calculateArea));
console.log(
  "circumference : " + calculate(myRadiusArr, calculateCircumference)
);
console.log("diameter : " + calculate(myRadiusArr, calculateDiameter));
