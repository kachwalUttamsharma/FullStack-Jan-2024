// 1
// undefined and not defined
console.log(x); // not defined

// 2

y = 1;
console.log(y); // 1
var y;

// 3
// declaration and intialization
console.log(z); // undefined
var z = 1;

// 4

a = 1;
console.log(a); // error
let a;

// 5
console.log(b); // error
let b = 1;

// 6
console.log(c); // error
c = 1;

// 7
console.log(sum); // not defined -> undefined
var sum = function (a, b) {
  return a + b;
};

// 8
console.log(total); // not defined
const total = function (a, b) {
  return a + b;
};

// 9
console.log(sum1(2, 3));

function sum1(a, b) {
  return a + b;
}

// 10

function example1() {
  if (true) {
    var aa = 1;
    let bb = 2;
    console.log(bb);
  }
  console.log(aa);
  console.log(bb);
}
example1();

// let and const variables are block scoped
// if you cannot write logic in one line you for block
// if(true) var aa = 1
// if(true) {
// whatever magic happens here stays here with respect to let and const
// variables
// where stills var variables are hoisted in global space
// }

// 11
var cc = 20;
function example() {
  if (true) {
    var cc = 1;
  }
  console.log(cc); // A 1
}
example();
console.log(cc); // B 20

// 12
var dd = 20;
function example2() {
  if (true) {
    dd = 1;
  }
  console.log(dd); // A
}
example2();
console.log(dd); // B

// 13
function parent() {
  var a = 20;
  function child() {
    // lexical scope -> current scope +
    // parent scope till it reaches global scope
    console.log(a);
  }
  child();
}
parent();

//14

function parent1() {
  var a = 20;
  function child() {
    console.log(a); // A
    function child2() {
      console.log(a); // B
    }
    child2();
  }
  child();
}
parent1();

// 15
function parent2() {
  var a = 20;
  function child() {
    console.log(a); // A - undefined
    function child2() {
      console.log(a); // B - 10
    }
    var a = 10;
    child2();
  }
  child();
}
parent2();

// 16
function parent3() {
  var a = 20; // a = 10
  function child() {
    console.log(a); // A. 20
    function child2() {
      console.log(a); // B. undefined
      var a = 30;
    }
    a = 10;
    child2();
  }
  child();
  console.log(a); // C. 10
}
parent3();

// 17
function parent4() {
  var a = 20;
  function child() {
    let a = 10; // a = 30
    console.log(a); // A. 10
    function child2() {
      console.log(a); // B. 10
      a = 30;
    }
    console.log(a); // C: 10
    child2();
  }
  child();
  console.log(a); // D: 20
}
parent4();

// 18
function parent5() {
  var a = 20;
  function child() {
    let a = 10; // a = 30
    console.log(a); // A. 10
    function child2() {
      console.log(a); // B. 10
      a = 30;
    }
    child2();
    console.log(a); // C:30
  }
  child();
  console.log(a); // D: 20
}

parent5();
