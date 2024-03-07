Array.prototype.myReduce = function (cb, intialValue) {
  let response = intialValue;
  for (let i = 0; i < this.length; i++) {
    response = response ? cb(response, this[i], i, this) : this[i];
  }
  return response;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum of elements
const result = arr.reduce((previousValue, currentValue, index, arr) => {
  return (previousValue += currentValue);
}, 0);

console.log(result);

const result1 = arr.myReduce((previousValue, currentValue, index, arr) => {
  return (previousValue += currentValue);
}, 0);

console.log(result1);
