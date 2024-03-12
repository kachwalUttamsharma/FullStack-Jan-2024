function multiplyBy(num) {
  return function (x) {
    return num * x;
    var num = 2;
  };
}
var multiplyByTwo = multiplyBy(2);
var result = multiplyByTwo(5);
console.log(result);

function sum(x, y) {
  return x + y;
}

const val = sum(1, 3);
const sum = function (x, y) {};

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchData("https://api.example.com/data"); // Fetches data from the provided URL
