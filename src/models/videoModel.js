const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoID: { type: String, required: true, unique: true },
  urlVideo: { type: String, required: true },
  urlImageThumbnail: { type: String, required: true },
  title: { type: String, required: true },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
