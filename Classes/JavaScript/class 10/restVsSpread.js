const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const arr1 = [12, 13, 14, 15, 16, 17, 18, 19, 20];

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i]);
}
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]);
}
// console.log(arr2);
const arr3 = [...arr, ...arr1];
// console.log(arr3);

// rest -> rest of items
function myBio(firstName, lastName, ...restBio) {
  return {
    firstName: firstName,
    lastName: lastName,
    ...restBio,
  };
}

//console.log(myBio("uttam", "sharma", "8912685217", "Hyderabad"));

// destructuring -> breaking down into smaller parts

let a = 10;
let b = 20;
// const arr4 = [];
// arr4.push(a);
// arr4.push(b);
// [10,20]
[b, a] = [10, 20];
console.log("b : ", b);
console.log("a :", a);

const arr5 = [1, 2, 3, 4, 5];

const [f, g, ...e] = arr5;

console.log(f, g, e);

const { lastName: name, ...objOtherItem } = {
  firstName: "John",
  lastName: "Doe",
  phone: "123",
};
console.log(name, objOtherItem);
