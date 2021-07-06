const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  postTitle: { type: String, required: true },
  postContent: { type: String, required: true },
  photoId: [{ type: String }],
  comments: [
    {
      by: { type: String },
      comment: { type: String },
    },
  ],
});

postSchema.set("timestamps", true);

module.exports = mongoose.model("Post", postSchema);
