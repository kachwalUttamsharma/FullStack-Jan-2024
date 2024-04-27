const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");

app.use(express.json());

const data = JSON.parse(fs.readFileSync("data.json").toString());
const products = data.products;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send(products);
});

// body , query parameter , params
app.get("/products/productById/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productInfo = products.find((p) => p.id === id);
  res.status(200).json(productInfo);
});

app.post("/products/add", (req, res) => {
  products.push(req.body);
  res.status(201).json({ message: "Item has been added" });
});

// replace whole data for product id with req body
app.put("/products/updateInfo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // updating by replacing the object
  const productIndex = products.findIndex((p) => p.id === id);
  // splice -> it is used add and remove item from array at any respective index
  // it is used replace or update item at specified index
  products.splice(productIndex, 1, { id: id, ...req.body });
  res.status(201).json({ messgae: "item has been updated" });
});

// updating information
app.patch("/products/updateInfoByPatch/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ message: "item has been updated." });
});

app.delete("/products/deleteById/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(201);
  res.send("Item has be deleted");
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

// username: kachwalsharma1;
// password: nn6KETSsopFy7JdJ;
