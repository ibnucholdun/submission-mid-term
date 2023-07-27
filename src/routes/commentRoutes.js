const express = require("express");
const router = express.Router();
const {
  getCommentList,
  submitComment,
} = require("./../controllers/commentController");

router.get("/comment/:username", getCommentList);
router.post("/comment", submitComment);

module.exports = router;
