// view

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const courseRouter = require("./routes/courseRoute");
const port = 8080;
const url =
  "mongodb+srv://uttamsharma:W860DhG1cfqxl5bB@cluster0.rcvsf3p.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url)
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/v1/courses/", courseRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
