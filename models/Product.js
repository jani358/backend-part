const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // Updated product schema fields
  productName: { type: String, required: true },
  sku: { type: String, required: true },
  mainImage: { type: String, required: true },
  price: { type: Number, required: true },

  productDescription: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
