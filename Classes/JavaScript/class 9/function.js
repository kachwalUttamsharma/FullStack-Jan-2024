/**
 * Function Statement, Function Declaration,
 * Function Expression,
 * Anonymous Function,
 * Named Function Expression,
 * Arrow Function
 */

// Function Declaration, Function Statement
// FUnction Parameter
function SayHi(from, to) {
  console.log(from + " is whishing HI! to the " + to);
}

// Function Invocation
// Function Arguments
SayHi("Abhishek", "Ratan");

// Function Expression
// Annoymous Function Expression
const sayHiExpression = function (from, to) {
  console.log(
    from + " is whishing HI! to the " + to + " from say hi expression"
  );
};

sayHiExpression("Abhishek", "Ratan");

// named function expression
const sayHiExpression1 = function SayHi(from, to) {
  console.log(
    from + " is whishing HI! to the " + to + " from say hi expression 1"
  );
};

sayHiExpression1("Abhishek", "Ratan");

// Arrow Function - ES6
const Hello = (from, to) => {
  console.log(
    from + " is whishing HI! to the " + to + " from say hi expression 1"
  );
};

// Frist class citizens || first class function
// functions can be used as methods and as variables and can be passed into function
// can be also returned from function
const hello = () => {
  return "Say Hello";
};

const HelloWorld = (params) => {
  return params;
};

// const newfunc = HelloWorld(hello);
// newfunc();
console.log(HelloWorld(hello)());
// Hellworld(hello) -> hello()
