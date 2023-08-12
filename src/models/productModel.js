const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true, unique: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  urlImage: { type: String, required: true },
  videoID: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
