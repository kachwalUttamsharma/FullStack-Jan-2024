const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
  partialUpdate,
  deleteProduct,
  updateByReplace,
} = require("../controller/productController");
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/productById/:id", getProductById);
productRouter.post("/add", addProduct);
productRouter.put("/updateInfo/:id", updateByReplace);
productRouter.patch("/updateInfoByPatch/:id", partialUpdate);
productRouter.delete("/deleteById/:id", deleteProduct);

module.exports = productRouter;
