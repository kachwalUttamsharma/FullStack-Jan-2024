const fs = require("fs");
const path = require("path");

// CRUD : Create, Read, Update, Delete

// for reading data file should be there
// writing data into file doesnt need file to exist, it will file and data
// if not present
// update/ delete also needs file

// Read -> blocking
const content = fs.readFileSync("file1.txt");

// explicit conversion
console.log(content.toString());

// write
try {
  fs.writeFileSync("file2.txt", "This is the content of file-2");
  const content2 = fs.readFileSync("file2.txt");
  console.log(content2.toString());
} catch (err) {
  console.log(err);
}

// update
try {
  fs.writeFileSync("file3.txt", "This is the content of file-3");
  const content3 = fs.readFileSync("file3.txt");
  console.log(content3.toString());
  fs.appendFileSync("file3.txt", "New Data bing appended into file-3");
  const updatedData = fs.readFileSync("file3.txt");
  console.log(updatedData.toString());
} catch (err) {
  console.log(err);
}

// delete
try {
  fs.unlinkSync("file3.txt");
} catch (err) {
  console.log(err);
}

// direction can has list of directories and list of files

// relative path vs path
// Classes/NodeJS/File System/file1.txt
// /Users/kachwaluttamsharma/Desktop/DEV/FullStack-MERN-Jan/Classes/NodeJS/File System/file1.txt

// whole path
// directory name
console.log(__dirname);
//filename
console.log(__filename);

const fileName = path.basename(__filename);
console.log(fileName);
const ext = path.extname(__filename);
console.log(ext);

// if exist
const doFileExist = fs.existsSync("file2.txt");
console.log(doFileExist);

// directory
// mkdir - make directory, rmdir - removing directory
// fs.mkdirSync("myDirectory");
// fs.mkdirSync("myDirectory2");
// fs.rmdirSync("myDirectory");

// copy a file from one folder to another folder in node.js
const sourceFilePath = "myDirectory/source-file.txt";
const destinationPath = "myDirectory2/destination-file.txt";

// incoming stream of data ->
// create a readable stream from the source file
const readStream = fs.createReadStream(sourceFilePath);

// create a writable stream to the destination file
const writeSteam = fs.createWriteStream(destinationPath);

// pipe the data from source file to the destination file
readStream.pipe(writeSteam);

readStream.on("error", (err) => {
  console.log(err);
});

writeSteam.on("error", (err) => {
  console.log(err);
});

writeSteam.on("finish", () => {
  console.log("file data has been copied");
});
