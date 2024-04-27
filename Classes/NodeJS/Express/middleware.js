const express = require("express");
const errorHandler = require("./ErrorHandling");
const bookRouter = require("./booksRouter");
const app = express();
const port = 3001;

const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- request [${req.method} ${req.url}]`);
  next();
};

const auth = (req, res, next) => {
  console.log("query params : ", req.query);
  if (req.query.password === "123") {
    next();
  } else {
    // res.status(401).json({ message: "user didnt enter right password" });
    res.status(401);
    throw new Error("user is not valid");
  }
};
// application level middleware
app.use(loggerMiddleware);
app.use(auth);
app.use(errorHandler);
// built-in middleware
app.use(express.static("public"));
// router middleware
app.use("/books", bookRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/apiData", (req, res) => {
  res.send("List of API Response");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
