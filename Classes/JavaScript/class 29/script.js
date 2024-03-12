// // counter
// // Q implement a counter function that returns +1 value

// let val = 1;
// function counter() {
//   console.log(val);
//   val += 1;
// }
// // counter(); // 1
// // counter(); // 2
// // counter(); // 3

// // A closure is the combination of a function bundled together (enclosed)
// //  with references to its surrounding state (the lexical environment).
// //  In other words, a closure gives you access to an outer function's
// //  scope from an inner function

// function createCounter() {
//   let val = 1;
//   return function () {
//     console.log(val);
//     val += 1;
//   };
// }
// const counter1 = createCounter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3

// createCounter()(); // 1

// createCounter()(); // 1

// // for (var i = 0; i < 10; i++) {
// //   console.log("for loop iteration start " + i);
// //   function a(val) {
// //     setTimeout(() => {
// //       console.log(val);
// //     }, val * 1000);
// //   }
// //   a(i);
// //   console.log("for loop iteration end " + i);
// // }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// function sum1(x, y) {
//   return function (z) {
//     return function () {
//       return x + y + z;
//     };
//   };
// }
// console.log(sum1(1, 2)(3)()); // 6
