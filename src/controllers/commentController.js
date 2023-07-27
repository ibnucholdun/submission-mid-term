const Comment = require("../models/commentModel");

const getCommentList = async (req, res) => {
  try {
    const { username } = req.params;

    const commentList = await Comment.find({ username });

    res.json({
      status: "Success",
      message: "All Comments",
      commentList,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

const submitComment = async (req, res) => {
  try {
    const { username, comment } = req.body;
    const videoID = req.query.videoID;
    const newComment = new Comment({ username, comment, videoID });

    await newComment.save();

    res.json({
      status: "Success",
      message: "Comment added",
      comment: newComment,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateComment = async (req, res) => {
  try {
    const { username, comment } = req.body;
    const videoID = req.query.videoID;
    const updatedComment = await Comment.findOneAndUpdate(
      { username, videoID },
      { comment },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ success: true, comment: updatedComment });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getCommentList,
  submitComment,
};
