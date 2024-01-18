// numbers

const a = 10;
const b = -10;
const c = 10.345;
const d = -10.345;

console.log(typeof a);
console.log(a, b, c, d);

// Strings
const e = "q";
const f = "hello world";
console.log(typeof e);
console.log(e, f);

// Null
const g = null;
console.log(typeof g, g);

// Boolean
const h = true;
const i = false;
console.log(typeof h);
console.log(h, i);

// undefined || not defined

// not defined talks about variable which is not declared
// console.log(alpha);

// undefined -> when variable is declared but not initialized
let j;
console.log(typeof j, j);

// non - primitive types

// arrays
// collections of values which can store different data types values
const k = [1, 2, 3, 4, 5];
const l = ["sambit", 1, 2, true, null];
console.log(typeof k, k);
console.log(typeof l, l);

// objects - custom data type which can store any data

const person = {
  firstName: "sambit",
  lastName: "sharma",
  phoneNumber: "97867455435",
  age: 20,
};
console.log(typeof person);
console.log(person);
console.log(typeof person.firstName);

// functions - create a function when you want to perform
// a specific task again and again

// (...,...,..) -> function parameters
// { } is called as function body
function coffeeMachine(quantity, drink) {
  const item = "I need " + quantity + " " + drink;
  return item;
}

console.log(coffeeMachine("200ml", "expresso"));
console.log(coffeeMachine("200ml", "latte"));
console.log(typeof coffeeMachine);
