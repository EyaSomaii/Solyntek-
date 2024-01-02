const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Email: {
        type: String,
          unique: true,
    },
    Phone: {
      type: Number,
    },
    Password: {
      type: String,
    },
 
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchema);
module.exports = Users;