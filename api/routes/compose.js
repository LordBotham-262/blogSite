const express = require("express");
const router = express.Router();
const ComposeController = require("../controller/composeController");

//@desc GET composePage
//@route = GET /api/compose
//@query = null
router.get("/", ComposeController.post_getComposePage);

//@desc POST Post to DB
//@route = POST /api/post
//@query = null
router.post("/", ComposeController.post_composePost);

module.exports = router;
