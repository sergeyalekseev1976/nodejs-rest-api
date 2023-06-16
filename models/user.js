const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../middlewares");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const authSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});
const subSchema = Joi.object({
  subscription: Joi.string().required(),
});
const emailSchema = Joi.object({
   email: Joi.string().email().required(),
});

userSchema.post("save", mongooseError);
const User = model("user", userSchema);

module.exports = { User, authSchema, subSchema, emailSchema };
