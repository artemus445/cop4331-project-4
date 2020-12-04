const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: "Please Enter full name!",
    },
    username: {
        type: String,
        required: "Please Enter user name!",
      },
    email: {
      type: String,
      required: "Please Enter email!",
    },
    password: {
      type: String,
      required: "Please Enter password!",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
