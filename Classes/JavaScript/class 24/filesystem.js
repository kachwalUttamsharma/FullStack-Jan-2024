// filesystem
const fs = require("fs");

// synchronous way

// const data1 = fs.readFileSync("f1.txt");
// const data2 = fs.readFileSync("f2.txt");
// const data3 = fs.readFileSync("f3.txt");

// console.log(data1.toString());
// console.log(data2.toString());
// console.log(data3.toString());

// async process
function cb1(err, data) {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data.toString());
  }
}

function cb2(err, data) {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data.toString());
  }
}

fs.readFile("f1.txt", cb1);

fs.readFile("f3.txt", function (err, data) {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data.toString());
  }
});

// function readFile("f1.txt", cb) {
//     try{
//     const getFile = path("f1.txt");
//         cb(null, getFile)
//     }catch(e){
//         cb(e, null)
//     }
// }
