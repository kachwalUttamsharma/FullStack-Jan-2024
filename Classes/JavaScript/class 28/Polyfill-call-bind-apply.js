const person = {
  name: "John",
};

const person2 = {
  name: "Amit",
};

function printAge(age, str) {
  console.log(`${this.name} is ${age} years old`);
  console.log(str);
}

printAge.call(person, 35);

// ------------------------------------------------------
/*
Call Polyfill
*/
Function.prototype.myCall = function (context, ...args) {
  if (context === undefined) {
    context = {};
  }
  if (typeof this !== "function") {
    throw new Error("can be callled only on functions");
  }
  /* 
    context = {
        name: "John",
    }
    this -> function printAge
    context.func = printAge
    context = {
        name: "John",
        func: printAge
    }
    context.func(age)
  */
  context.func = this;
  context.func(...args);
};

printAge.myCall(person2, 23);

// ------------------------------------------------------
/*
 Apply Polyfill
 */
printAge.apply(person2, [23]);

Function.prototype.myApply = function (context, arr) {
  if (context === undefined) {
    context = {};
  }
  if (typeof arr !== "object") {
    throw new Error("can be callled only on arrays");
  }
  if (typeof this !== "function") {
    throw new Error("can be callled only on functions");
  }
  context.func = this;
  context.func(...arr);
};

printAge.myApply(person, [23]);

//----------------------------------------------------------

/* 
    Bind Polyfill
*/
const returnedFunc = printAge.bind(person, 32);
console.log(returnedFunc);
returnedFunc();

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("can be callled only on functions");
  }
  context.func = this;
  return function (...args1) {
    context.func(...args, ...args1);
  };
};

const returnedFunc1 = printAge.myBind(person, 32);
console.log(returnedFunc1);
returnedFunc1("random");
