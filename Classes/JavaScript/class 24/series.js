const fs = require("fs");

// IIFE
(function a() {
  console.log("a");
})();

// callback hell
fs.readFile("f1.txt", function cb1(err, data) {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data.toString());
    fs.readFile("f2.txt", function cb2(err, data) {
      if (err) {
        console.log(err.toString());
      } else {
        console.log(data.toString());
        fs.readFile("f3.txt", function (err, data) {
          if (err) {
            console.log(err.toString());
          } else {
            console.log(data.toString());
          }
        });
      }
    });
  }
});
