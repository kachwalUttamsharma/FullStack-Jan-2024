const add = (x, y) => {
  console.log(x + y);
};

const sub = (x, y) => {
  console.log(x - y);
};

const mul = (x, y) => {
  console.log(x * y);
};

const div = (x, y) => {
  console.log(x / y);
};

module.exports = {
  addition: add,
  subtraction: sub,
  multiplication: mul,
  division: div,
};
