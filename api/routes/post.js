const express = require("express");
const router = express.Router();
const PostController = require("../controller/postController");

//@desc GET Posts from DB
//@route = GET /api
//@query = null or postId
router.get("/", PostController.post_getAll);

//@desc GET Posts from DB
//@route = GET /api/posts
//@query = postId
router.get("/post/:postId", PostController.post_getPost);

//@desc PUT comments in post
//@route = PUT /api/posts
//@query = postId
router.post("/post/:postId", PostController.post_addComment);

module.exports = router;
