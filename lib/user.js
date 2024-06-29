import { User } from "@/models/models";
import mongoose from "mongoose";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  const result = await mongoose.connect(process.env.MONGODB_URI);
  if (result) {
    console.log("Connected to MongoDB");
  }
}

export async function saveUser({ githubId, username, email, hashedPassword }) {
  await dbConnect();
  const user = new User({
    user_name: username,
    email_id: email,
    hashed_password: hashedPassword,
    github_id: githubId,
  });
  const result = await user.save();
  return result;
}

export async function getUserByEmail(email) {
  await dbConnect();
  const existingUser = await User.findOne({ email_id: email });
  return existingUser;
}

export async function getUserbyGithubId(githubId) {
  await dbConnect();
  const existingUser = await User.findOne({ github_id: githubId });
  return existingUser;
}
