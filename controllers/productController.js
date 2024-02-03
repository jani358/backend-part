const Product = require("../models/Product");

const productController = {
  addProduct: async (req, res) => {
    try {
      const { productName, sku, mainImage, price } = req.body;

      // Create a new product instance
      const newProduct = new Product({
        productName,
        sku,
        mainImage,
        price,
      });

      // Save the product to the database
      const savedProduct = await newProduct.save();

      // Respond with the saved product
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = productController;
