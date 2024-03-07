// sum of the all numbers
const obj = {
  arr: [1, 2, 3, 4, 5],
};

function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// reduce HOF should be used when you want to reduce array of items into a single item

console.log("sumOfNumbers : " + sumOfNumbers(obj.arr));

// acc -> sum
const sum1 = obj.arr.reduce((result, num) => {
  return result + num;
}, 0);

console.log("sumOfNumbers from reduce : " + sum1);

// [1,2,3] => [1,3,6]
function calculatePrefixSum(array) {
  const prefixSumArray = array.reduce((accumulator, currentValue) => {
    if (accumulator.length > 0) {
      accumulator.push(accumulator[accumulator.length - 1] + currentValue);
    } else {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  return prefixSumArray;
}

const inputArray = [1, 2, 3, 4, 5];
const prefixSumResult = calculatePrefixSum(inputArray);

console.log("Input Array:", inputArray);
console.log("Prefix Sum Array:", prefixSumResult);
