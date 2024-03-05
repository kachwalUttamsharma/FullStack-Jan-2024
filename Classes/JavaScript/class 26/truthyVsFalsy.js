let a = 3;

// 12, "random", true, ' ' -> truthy
// undefined, 0, null, NaN, '', false -> falsy
if (a) {
  console.log("truthy value");
} else {
  console.log("falsey value");
}

// == vs ===
// typeof v

const c = [1, "random", 3];

// typeof c === Array
console.log(Array.isArray(c));
console.log(typeof c[0]);
console.log(typeof c[1]);
