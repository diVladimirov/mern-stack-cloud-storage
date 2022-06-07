const getCurrent = async (req, res) => {
  const { id, email, diskSpace, usedSpace } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        id,
        email,
        diskSpace,
        usedSpace,
      },
    },
  });
};

module.exports = getCurrent;
