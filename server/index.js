const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const authRouter = require("./routes/api/auth");
const app = express();
const PORT = config.get("serverPort");
const DB_HOST = config.get("dbUrl");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

app.use((request, response) => {
  response.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});

const start = async () => {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (error) {}
};
start();
