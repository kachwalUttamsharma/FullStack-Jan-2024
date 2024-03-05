const lists = [
  {
    id: 1,
    title: "Complete Asignmenst",
    description: "class related information",
  },
  {
    id: 2,
    title: "Complete HomeWork Assignment",
    description: "class related information",
  },
  {
    id: 3,
    title: "Mock interview prep",
    description: "Language Fundamentals",
  },
];

const myfetch = function (delay, limit) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (limit > 3) {
        reject("Not a valid limit");
      } else {
        resolve(lists.slice(0, limit));
      }
    }, delay);
  });
};

// const student1 = myfetch(1000, 1);
// const student2 = myfetch(2000, 2);
// const student3 = myfetch(3000, 3);
// const student4 = myfetch(4000, 4);

let count = 1;

setInterval(() => {
  console.log(count);
  count = count + 1;
}, 1000);

// student1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// student2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// student3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// student4
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// student1
//   .then((data) => {
//     console.log(data);
//     return myfetch(2000, 2);
//   })
//   .then((data) => {
//     console.log(data);
//     return myfetch(3000, 3);
//   })
//   .then((data) => {
//     console.log(data);
//     return myfetch(4000, 4);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// only if all promises are resolved then call will go to .then function
// or else if any promise fails or reject then call goes to catch function
// Promise.all([
//   myfetch(1000, 1),
//   myfetch(2000, 2),
//   myfetch(3000, 3),
//   myfetch(4000, 4),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.allSettled([
//   myfetch(1000, 1),
//   myfetch(2000, 2),
//   myfetch(3000, 3),
//   myfetch(4000, 4),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.race([
  myfetch(1000, 1),
  myfetch(2000, 2),
  myfetch(3000, 3),
  myfetch(4000, 4),
])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
