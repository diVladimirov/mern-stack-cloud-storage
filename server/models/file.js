const { Schema, model, ObjectId } = require("mongoose");

const fileSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  accesLink: {
    type: String,
  },
  size: {
    type: Number,
    default: 0,
  },
  path: { type: String, default: "" },
  date: { type: Date, default: Date.now() },
  user: { type: ObjectId, ref: "User" },
  parent: { type: ObjectId, ref: "File" },
  childs: [{ type: ObjectId, ref: "File" }],
});

const File = model("file", fileSchema);

module.exports = { File };
