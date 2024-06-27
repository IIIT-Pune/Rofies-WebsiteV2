"use server";

import mongoose from "mongoose";
import { hashUserPassword, verifyPassword } from "./hashpassword";
import { createAuthSession, destroyAuthSession } from "./auth";
import { getUserByEmail, saveUser } from "./user";
import { redirect } from "next/navigation";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  const result = await mongoose.connect(process.env.MONGODB_URI);
  if (result) {
    console.log("Connected to MongoDB");
  }
}
export async function Signup(prevState, formdata) {
  const username = formdata.get("username").trim();
  const email = formdata.get("email").trim();
  const password = formdata.get("password").trim();
  let errors = {};
  if (!username) {
    errors.username = "Username is required";
  }
  if (!email || !email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }
  if (!password || password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }
  if (Object.keys(errors).length) {
    return { errors };
  }
  await dbConnect();
  const hashedPassword = hashUserPassword(password);
  try {
    const result = await saveUser({ username, email, hashedPassword });
    await createAuthSession(result._id);
    redirect("/");
  } catch (error) {
    if (error.code === 11000) {
      return { errors: { email: "Email already in use." } };
    }
    throw error;
  }
}

export async function Login(prevState, formdata) {
  const email = formdata.get("email");
  const password = formdata.get("password");
  await dbConnect();
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { errors: { email: "This Email Does not Exist" } };
  }
  const isValidPassword = verifyPassword(existingUser.hashedPassword, password);
  if (!isValidPassword) {
    return { errors: { password: "Wrong Password" } };
  }
  await createAuthSession(existingUser._id);
  redirect("/");
}

export async function Logout() {
  await destroyAuthSession();
  redirect("/");
}
