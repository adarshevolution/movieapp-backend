const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email address"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("users", UsersSchema);

module.exports = users;
