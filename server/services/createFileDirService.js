const fs = require("fs");
const path = require("path");

const createFileDirService = (file) => {
  const filePath = path.join(
    __dirname,
    `..\\files\\${file.user}\\${file.path}`
  );

  return new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
        return resolve({ message: "File was created" });
      } else {
        return reject({ message: "File already exist" });
      }
    } catch (error) {
      return reject({ message: "File error" });
    }
  });
};

module.exports = createFileDirService;
