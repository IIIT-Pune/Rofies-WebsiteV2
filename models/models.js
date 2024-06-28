import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  user_name: { type: String },
  email_id: { type: String, unique: true },
  hashed_password: { type: String },
  github_id: { type: String, unique: true },
});
const sessionSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  expires_at: {
    type: Date,
    required: true,
  },
});
userSchema.plugin(UniqueValidator);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Session =
  mongoose.models.Session || mongoose.model("Session", sessionSchema);
