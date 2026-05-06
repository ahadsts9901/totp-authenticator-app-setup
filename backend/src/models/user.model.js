import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,

  twoFactorEnabled: {
    type: Boolean,
    default: false
  },

  twoFactorSecret: String
});

export const User = mongoose.model("User", userSchema);