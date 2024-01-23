// let a = 10;
// console.log(a);
// //Cannot access 'a' before initialization

/**
 * when you declare variable with let & const
 * so those variable will not be accessible before intialization and
 * at this moment they will be in a temporal dead zone
 */

const a = 10;
const b = 20;
const add = function add(a, b) {
  var ans = a + b;
  return ans;
};

const r = add(a, b);
const r1 = add(r, b);

console.log(r, r1);

const obj = {
  firstname: "John",
  lastname: "Smith",
};
