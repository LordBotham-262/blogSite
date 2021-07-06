const mongoose = require("mongoose");

const Post = require("../models/post");

exports.post_getComposePage = (req, res, next) => {
  res.render("compose.ejs", {
    message: "",
    status: "",
  });
};

exports.post_composePost = (req, res, next) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    postTitle: req.body.postTitle,
    postContent: req.body.postContent,
    //   photoId: [{ type: String }],
  });
  post
    .save()
    .then((docs) => {
      res.render("compose.ejs", {
        message: "post created successfully",
        status: "alert-success",
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.render("compose.ejs", {
        message: "failed to create a post",
        status: "alert-danger",
      });
    });
};
