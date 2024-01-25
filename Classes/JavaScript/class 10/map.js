const arr = [2, 3, 4, 5, 6];

function calculateSquares(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}
console.log(calculateSquares(arr));

// map -> when on each index of the array you are expecting
// same operation to be done

// foreach loop
// const outputArr = arr.map((num, index) => {
//   console.log(num, index);
//   return num * num;
// });
// console.log(outputArr);

// const transaction = [1000, 300, 500, 200, 100];
// const inrToUSD = 83;

// const outputTxnArr = transaction.map((txn, i) => {
//   return txn / inrToUSD;
// });

// console.log(outputTxnArr);
