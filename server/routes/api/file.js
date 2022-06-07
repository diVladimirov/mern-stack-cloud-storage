const express = require("express");
const { auth } = require("../../middlewares");
const fileController = require("../../controllers/fileController/fileController");

const router = express.Router();

router.post("", auth, fileController.createDir);
router.get("", auth, fileController.getFiles);

module.exports = router;
