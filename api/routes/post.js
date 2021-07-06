const express = require("express");
const router = express.Router();
const PostController = require("../controller/postController");

//@desc GET Posts from DB
//@route = GET /api/post
//@query = null or postId
router.get("/", PostController.post_getAll);

module.exports = router;
