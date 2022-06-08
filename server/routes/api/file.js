const express = require("express");
const { auth } = require("../../middlewares");
const { file: ctrl } = require("../../controllers");

const router = express.Router();

router.post("", auth, ctrl.createDir);
router.get("", auth, ctrl.getFiles);

module.exports = router;
