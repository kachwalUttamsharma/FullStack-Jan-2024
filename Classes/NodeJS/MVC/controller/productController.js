const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json").toString());
const products = data.products;

const getAllProducts = (req, res) => {
  res.send(products);
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const productInfo = products.find((p) => p.id === id);
  res.status(200).json(productInfo);
};

const addProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json({ message: "Item has been added" });
};

const updateByReplace = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { id: id, ...req.body });
  res.status(201).json({ messgae: "item has been updated" });
};

const partialUpdate = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ message: "item has been updated." });
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(201);
  res.send("Item has be deleted");
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateByReplace,
  partialUpdate,
  deleteProduct,
};
