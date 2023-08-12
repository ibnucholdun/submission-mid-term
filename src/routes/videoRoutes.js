const express = require("express");
const router = express.Router();
const {
  getVideoById,
  getAllVideos,
  createVideo,
  updateVideo,
  deleteVideo,
  getSearchVideos,
} = require("./../controllers/videoController");

router.get("/video/:videoID", getVideoById);
router.get("/video", getAllVideos);
router.post("/video", createVideo);
router.put("/video/:videoID", updateVideo);
router.delete("/video/:videoID", deleteVideo);
router.get("/searchVideo", getSearchVideos);

module.exports = router;
