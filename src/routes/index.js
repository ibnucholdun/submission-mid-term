const express = require("express");
const router = express.Router();

const videoRoutes = require("./videoRoutes");
const productRoutes = require("./productRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/api", videoRoutes);
router.use("/api", productRoutes);
router.use("/api", commentRoutes);

module.exports = router;
