const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//  adding a product
router.post("/", productController.addProduct);

// all products
router.get("/", productController.getAllProducts);

//  a specific product by ID
router.get("/:productId", productController.getProductById);

// updating a product by ID
router.put("/:productId", productController.updateProduct);

//  deleting a product by ID
router.delete("/:productId", productController.deleteProduct);

module.exports = router;
