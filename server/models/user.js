const { Schema, model, ObjectId } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    diskSpace: {
      type: Number,
      default: 1024 ** 3 * 10,
    },
    usedSpace: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
    },
    files: [{ type: ObjectId, ref: "File" }],
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = { User, joiSchema };
