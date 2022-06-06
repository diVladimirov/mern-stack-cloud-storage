const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const config = require("config");
const SECRET_KEY = config.get("secretKey");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    return res.status(404).json({ message: "Email not found" });
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    return res.status(400).json({ message: "Invalid password" });
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });
  await User.findByIdAndUpdate(user._id, { token });
  const { diskSpace, usedSpace } = user;
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        id: user._id,
        email,
        diskSpace,
        usedSpace,
      },
    },
  });
};
module.exports = login;
