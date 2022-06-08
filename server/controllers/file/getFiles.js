const { File } = require("../../models");

const getFiles = async (req, res) => {
  try {
    const files = await File.find({
      user: req.user.id,
      parent: req.query.parent,
    });
    return res.json({ files });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Can not get files" });
  }
};

module.exports = getFiles;
