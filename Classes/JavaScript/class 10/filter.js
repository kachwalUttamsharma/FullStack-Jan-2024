// filter

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

function getEven(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      output.push(arr[i]);
    }
  }
  return output;
}

// console.log(getEven(arr));

const getEvenNumbers = arr.filter((num) => {
  return num % 2 === 0;
});

const getOddNumbers = arr.filter((num) => {
  return num % 2 != 0;
});
console.log(getEvenNumbers);
console.log(getOddNumbers);

// === vs ==

// comparision operators

// == just checking content value
// === checking both data type and value
const x = 10;
const y = "10";

console.log(x == y, x === y);

const transaction = [1000, 300, 500, 200, 100, -220, -300, -400];

const getMeOnlyPositiveTxns = transaction.filter((txn) => {
  return txn > 0;
});
console.log(getMeOnlyPositiveTxns);
