const uuid = require("uuid");
const Video = require("../models/videoModel");

const getVideoById = async (req, res) => {
  try {
    const videoID = req.params.videoID;

    const videoData = await Video.aggregate([
      { $match: { videoID } },
      {
        $lookup: {
          from: "products",
          localField: "videoID",
          foreignField: "videoID",
          as: "products",
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "videoID",
          foreignField: "videoID",
          as: "comments",
        },
      },
      {
        $project: {
          videoID: 1,
          url: 1,
          products: {
            productID: 1,
            link: 1,
            title: 1,
            price: 1,
          },
          comments: {
            username: 1,
            comment: 1,
            timestamp: 1,
          },
        },
      },
    ]);

    if (videoData.length === 0) {
      return res.status(404).json({
        status: "Failed",
        message: "Video not found",
      });
    }

    res.json({
      status: "Success",
      message: "Video found",
      video: videoData[0],
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const getAllVideos = async (req, res) => {
  try {
    const allVideos = await Video.find();

    res.json({
      status: "Success",
      message: "All Videos",
      allVideos,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const createVideo = async (req, res) => {
  try {
    const { urlVideo, urlImageThumbnail } = req.body;

    const videoID = uuid.v4();

    const newVideo = new Video({ videoID, urlVideo, urlImageThumbnail });

    await newVideo.save();

    res.json({
      success: "Success",
      message: "Video created",
      video: newVideo,
    });
  } catch (err) {
    res.status(500).json({
      success: "Error",
      message: "Server Error",
    });
  }
};

const updateVideo = async (req, res) => {
  try {
    const videoID = req.params.videoID;
    const updatedData = req.body;

    const filter = { videoID };
    const updatedVideo = await Video.findOneAndUpdate(filter, updatedData, {
      new: true,
    });

    if (!updatedVideo) {
      return res.status(404).json({
        status: "Failed",
        message: "Video not found",
      });
    }

    res.json({
      status: "Success",
      message: "Video updated",
      video: updatedVideo,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const videoID = req.params.videoID;

    const deletedVideo = await Video.findOneAndDelete({ videoID });

    if (!deletedVideo) {
      return res.status(404).json({
        status: "Failed",
        message: "Video not found",
      });
    }

    res.json({
      status: "Success",
      message: "Video deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

module.exports = {
  getVideoById,
  getAllVideos,
  createVideo,
  updateVideo,
  deleteVideo,
};
