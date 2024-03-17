// Importing the Product model
const Product = require("../models/Product");

// Creating a controller object to handle product-related operations
const productController = {
  // Controller method to add a new product
  addProduct: async (req, res) => {
    try {
      // Destructure the required fields from the request body
      const { productName, sku, mainImage, price } = req.body;

      // Create a new product instance with the provided data
      const newProduct = new Product({
        productName,
        sku,
        mainImage,
        price,
      });

      // Save the new product to the database
      const savedProduct = await newProduct.save();

      // Respond with the saved product in JSON format
      res.status(201).json(savedProduct);
    } catch (error) {
      // If an error occurs during the process
      console.error("Error adding product:", error);
      // Send a 500 Internal Server Error response with an error message
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

// Exporting the productController object for use in other parts of the application
module.exports = productController;
