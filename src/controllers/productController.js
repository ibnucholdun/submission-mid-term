const uuid = require("uuid");
const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const { link, title, price } = req.body;
    const videoID = req.query.videoID;
    const productID = uuid.v4();
    const existingProduct = await Product.findOne({ productID });
    if (existingProduct) {
      return res.status(400).json({
        status: "Failed",
        message: "Product already exists",
      });
    }

    const newProduct = new Product({ productID, link, title, price, videoID });

    await newProduct.save();

    res.json({
      status: "Success",
      message: "Product created",
      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json({
      status: "Success",
      message: "All Products",
      allProducts,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const productID = req.params.productID;
    const product = await Product.findOne({ productID });

    if (!product) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    res.json({
      status: "Success",
      message: "Product found",
      product,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productID = req.params.productID;
    const updatedData = req.body;

    const filter = { productID };
    const updatedProduct = await Product.findOneAndUpdate(filter, updatedData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    res.json({
      status: "Success",
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productID = req.params.productID;

    const deletedProduct = await Product.findOneAndDelete({ productID });

    if (!deletedProduct) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    res.json({
      status: "Success",
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
