Array.prototype.myMap = function (cb) {
  // this -> arr
  const response = [];
  for (let index = 0; index < this.length; index++) {
    response.push(cb(this[index], index, this));
    //response[index] = cb(this[index], index, this);
  }
  return response;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const arr1 = arr.map((elem, index, arr) => {
  return elem * 3;
});

//console.log(arr); // 1,2,3
console.log(arr1); // 2,4,6

const arr2 = arr
  .myMap((elem, index, arr) => {
    return elem * 2;
  })
  .filter((elem) => {
    return elem % 2 === 0;
  });
//console.log(arr); // 1,2,3
console.log(arr2); // 2,4,6
