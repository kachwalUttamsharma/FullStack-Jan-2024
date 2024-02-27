let firstName = "Muneeswara";
let secondName = "babu";
secondName = "pawar";
firstName = secondName;
// console.log(firstName);
// console.log(secondName);

// pass by value

let firstNameObj = {
  name: "Kiran",
};

let secondNameObj = {
  name: "lovepreet",
};

firstNameObj = secondNameObj;
secondNameObj.name = "uttam";
// console.log(firstNameObj);
// console.log(secondNameObj);

let person1 = {
  name: "adam",
  age: "25",
  address: {
    city: "Mumbai",
    pincode: "123456",
  },
  getEmail: function () {
    console.log(this);
  },
  arr: [1, 2, 3, 4, 5],
};

// copy
// let person2 = { ...person1 };
// person1.name = "kiran";
// person1.address.city = "Hyderabad";
// console.log(person1);
// console.log(person2);

console.log(JSON.stringify(person1));

// deep clone or deep copy
let person3 = JSON.parse(JSON.stringify(person1));
person1.name = "kiran";
person1.address.city = "Hyderabad";
console.log(person1);
console.log(person3);

// dont reinvent the wheel, untill it is unavoidable
