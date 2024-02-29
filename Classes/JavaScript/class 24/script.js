// DataSource

const dataSource = [
  { name: "foo", age: 27 },
  { name: "tejal", age: 26 },
  { name: "sambit", age: 26 },
  { name: "abhinav", age: 25 },
  { name: "upendra", age: 28 },
  { name: "uttam", age: 26 },
];

// 1 3 11 13 2 12
function getData() {
  console.log("before making api call 1");
  setTimeout(() => {
    let output = "";
    dataSource.forEach((data) => {
      output += `<li>${data.name} ${data.age}</li>`;
    });
    console.log("after getting data 2", output);
    document.body.innerHTML = output;
  }, 3000);
  console.log("after making api call 3");
}

function createData(data, cb) {
  console.log("before making create api call 11");
  setTimeout(() => {
    dataSource.push(data);
    console.log("after pushing data 12", dataSource);
    cb();
  }, 3500);
  console.log("after making create api call 13");
}
getData();
createData({ name: "dheeraj", age: 25 }, getData);
