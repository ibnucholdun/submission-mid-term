const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");

const {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/product", getAllProducts);
router.get("/product/:productID", getProductById);
router.post("/product", createProduct);
router.put("/product/:productID", updateProduct);
router.delete("/product/:productID", deleteProduct);

module.exports = router;
