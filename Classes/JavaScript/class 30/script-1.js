// set

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(1);

console.log(mySet);

console.log(mySet.values());

const res2 = mySet.entries();
console.log(res2);
const res = mySet.values();

for (const val of res) {
  console.log(val);
}

// for-in
// for-of
// for
// for-each
const res1 = mySet.keys();

for (const val of res1) {
  console.log(val);
}

console.log(typeof [], typeof mySet, typeof new Map());
console.log(mySet instanceof Set);
console.log([] instanceof Array);
