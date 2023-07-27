const express = require("express");
const router = express.Router();
const {
  getVideoById,
  getAllVideos,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("./../controllers/videoController");

router.get("/video/:videoID", getVideoById);
router.get("/video", getAllVideos);
router.post("/video", createVideo);
router.put("/video/:videoID", updateVideo);
router.delete("/video/:videoID", deleteVideo);

module.exports = router;
