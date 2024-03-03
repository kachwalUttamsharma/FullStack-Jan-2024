// promises
// producer
const promise = new Promise((resolve, reject) => {
  const a = 5;
  const b = 5;
  if (a == b) {
    resolve("Yes both a and b are equal");
  } else {
    reject("Both a and b are not equal");
  }
});

console.log(promise);

// consumers
// promise.then((data) => {
//   console.log(data);
// });
// promise.catch((error) => {
//   console.log(error);
// });

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
