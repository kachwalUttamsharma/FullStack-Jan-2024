Array.prototype.myFilter = function (cb) {
  // this -> arr
  const response = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      response.push(this[index]);
    }
  }
  return response;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const arr1 = arr.filter((elem, index, arr) => {
  return elem % 2 === 0;
});

const arr2 = arr.myFilter((elem, index, arr) => {
  return elem % 2 === 0;
});

console.log(arr);
console.log(arr1);
console.log(arr2);
