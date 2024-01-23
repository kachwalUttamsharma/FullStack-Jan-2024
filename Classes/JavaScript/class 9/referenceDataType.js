const obj = {
  firstName: "Ankit",
  lastName: "Tiwari",
};

// spread operator
const obj2 = { ...obj };
obj2.firstName = "uttam";
obj2.lastName = "sharma";

console.log(obj);
console.log(obj2);
/**
 * firstName: "Ankit",
 * lastName: "Tiwari
 */
