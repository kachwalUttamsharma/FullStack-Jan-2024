const express = require("express");
require("dotenv").config();
const app = express();
const dbConfig = require("./config/dbConfig");
const userRouter = require("./routes/userRouter");
const movieRouter = require("./routes/movieRouter");
console.log(dbConfig);

app.use(express.json());
app.use("/app/v1/users", userRouter);
app.use("/app/v1/users/admin", movieRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(process.env.PORT, () => {
  console.log(`server is listening to port no ${process.env.PORT}`);
});
