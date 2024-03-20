import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["admin", "seller", "regular"],
    required: true,
  },
});

userSchema.index({ email: 1 });
userSchema.index({ userType: 1 });

const User = mongoose.model("Users", userSchema);

export default User;
