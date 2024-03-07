Array.prototype.myForEach = function (cb) {
  // this -> arr
  for (let index = 0; index < this.length; index++) {
    cb(this[index], index, this);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// forEach doesnt new array
const arr1 = arr.forEach((elem, index, arr) => {
  arr[index] = elem * 2;
});

console.log(arr);
// console.log(arr1);

arr.myForEach((elem, index, arr) => {
  arr[index] = elem * 2;
});
console.log(arr); // 4,8,12
