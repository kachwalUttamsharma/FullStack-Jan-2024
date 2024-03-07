Array.prototype.myFlat = function myFlat(depth) {
  const response = [];
  for (let i = 0; i < this.length; i++) {
    // when to call recursion
    // when we can directly add element into response array
    if (Array.isArray(this[i]) && depth > 0) {
      response.push(...this[i].myFlat(depth - 1));
    } else {
      response.push(this[i]);
    }
  }
  return response;
};

const arr = [1, 2, 3, [1, [2, 3]], [2, 3, 4]];

// const arr0 = arr.myFlat();
// const arr1 = arr.myFlat(1);
const arr2 = arr.myFlat(2);
console.log(arr);
// console.log(arr0);
// console.log(arr1);
console.log(arr2);
