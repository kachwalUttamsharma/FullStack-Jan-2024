// MAP
// Key || Value in-memory storage

const fruits = new Map();

// SET(key, value) || GET(key) ||
// set(exisitingKey, toupdateValue) || delete(key)
// size
// foreach, entries, keys, values
// has, clear

// CRUD operations
fruits.set("Mango", 160);
fruits.set("Guava", 80);
fruits.set("Oranges", 100);
fruits.set("Banana", 60);
fruits.set("Sapota", 80);

console.log(fruits);
console.log(fruits.get("Mango"));
fruits.delete("Mango");
console.log(fruits);
fruits.set("Guava", 120);
console.log(fruits);

// size of map
fruits.size;

fruits.forEach((key, value) => {});

const arr = fruits.entries();
console.log(arr);

// fruits.keys.forEach((key) => {});

// fruits.values.forEach((value) => {});

if (fruits.has("Mango")) {
  console.log("Mango is present in map");
} else {
  console.log("Mango is not present in map");
}

fruits.clear();
