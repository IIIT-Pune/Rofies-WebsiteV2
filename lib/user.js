import { User } from "@/models/models";

export async function saveUser({ username, email, hashedPassword }) {
  const user = new User({ username, email, hashedPassword });
  const result = await user.save();
  return result;
}

export async function getUserByEmail(email) {
  const existingUser = await User.findOne({ email: email });
  return existingUser;
}
