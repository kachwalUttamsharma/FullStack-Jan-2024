const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// size of an array
console.log(a.length);

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
//   if (i % 2 === 0) {
//     console.log(a[i]);
//   }
// }

// a.forEach((element, i) => {
//   if (i % 2 === 0) {
//     console.log(element);
//   }
// });

// push add item into the array at the last position
// a.push(11);
// console.log(a);
// // pop remove an item from last position
// a.pop();
// console.log(a);

// // shift is used to remove items from start of array
// a.shift();
// console.log(a);
// // unshift is used to add items from start of array
// a.unshift(1);
// console.log(a);

// divides an array into 2 pieces and returns as new array
// slice(starting index , ending index)
const b = a.slice(3);
console.log(b);
console.log(a);

// start and end index
const c = a.slice(0, 3);
console.log(c);

// splice  -> add, remove and replace items in an array
