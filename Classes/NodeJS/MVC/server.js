const express = require("express");
const productRouter = require("./routes/productRoute");
const app = express();
const port = 8080;

app.use(express.json());
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
