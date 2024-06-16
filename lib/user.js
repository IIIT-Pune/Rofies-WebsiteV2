import { User } from "@/models/models";

export default async function saveUser({ username, email, hashedPassword }) {
  const user = new User({ username, email, hashedPassword });
  const result = await user.save();
  return result;
}
