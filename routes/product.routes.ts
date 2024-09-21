import express from "express"
import { addNewProduct, deleteProduct, getAllProducts, updateProduct } from "../controller/product.controller";
const productRoutes = express.Router();

productRoutes.post("/add", addNewProduct);
productRoutes.get("/get", getAllProducts);
productRoutes.put("/update", updateProduct);
productRoutes.delete("/", deleteProduct);

module.exports = productRoutes