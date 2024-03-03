const fs = require("fs");

const readFile = (filePath) => fs.promises.readFile(filePath);
const readFileCallbackSuccess = (fileData) =>
  console.log("file Data:" + fileData.toString());
const readFileCallbackError = (error) => console.log("error: " + error);

// readFile("f1.txt").then(readFileCallbackSuccess).catch(readFileCallbackError);
// readFile("f2.txt").then(readFileCallbackSuccess).catch(readFileCallbackError);
// readFile("f3.txt").then(readFileCallbackSuccess).catch(readFileCallbackError);

readFile("f1.txt")
  .then((data) => {
    readFileCallbackSuccess(data);
    return readFile("f2.txt");
  })
  .then((data) => {
    readFileCallbackSuccess(data);
    return readFile("f3.txt");
  })
  .then((data) => readFileCallbackSuccess(data))
  .catch((error) => readFileCallbackError(error));
