const createFileDirService = require("../../services/createFileDirService");
const { File } = require("../../models");

const createDir = async (req, res) => {
  try {
    const { name, type, parent } = req.body;
    const file = await File.create({ name, type, parent, user: req.user.id });
    const parentFile = await File.findOne({ _id: parent });
    if (!parentFile) {
      file.path = name;
      await createFileDirService(file);
    } else {
      file.path = `${parentFile.path}\\${file.name}`;
      await createFileDirService(file);
      parentFile.childs.push(file._id);
      await parentFile.save();
    }

    return res.json(file);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = createDir;
