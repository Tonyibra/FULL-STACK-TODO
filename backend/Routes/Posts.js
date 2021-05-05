const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../Controllers/PostsController");
const { protect } = require("../middlewares/Protect");
router.route("/").get(protect, getPrivateData);

module.exports = router;
