const getEmailFn = function (school, city, sport) {
  console.log(
    `${this.firstName} ${this.lastName} studies 
        in ${school} at ${city} and he likes to play ${sport}`
  );
};
const arr = ["Hyderabad", "City Montisorry School", "Cricket"];
const student = {
  firstName: "Adam",
  lastName: "Smith",
  age: 25,
};

// getEmailFn.call(student, arr[0], arr[1], arr[2]);

// mycall

Function.prototype.myCall = function (thisContext, ...args) {
  const currentContext = thisContext;
  let prop = Math.random();
  while (currentContext[prop] !== undefined) {
    prop = Math.random();
  }
  // this is pointing to the function itself
  currentContext[prop] = this;
  console.log("executing from polyfill");
  currentContext[prop](...args);
  delete currentContext[prop];
  //   return result;
};

getEmailFn.myCall(student, arr[0], arr[1], arr[2]);
