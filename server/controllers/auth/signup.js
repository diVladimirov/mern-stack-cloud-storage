const bcrypt = require("bcrypt");
const { User } = require("../../models/");
const fileServices = require("../../services/createFileDirService");
const { File } = require("../../models");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: `User with email ${email} in use`,
      });
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const newUser = await User.create({ email, password: hashPassword });
    await fileServices.createDir(new File({ user: newUser.id, name: "" }));
    const { diskSpace, usedSpace } = newUser;
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        user: {
          email,
          diskSpace,
          usedSpace,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error" });
  }
};

module.exports = signup;
