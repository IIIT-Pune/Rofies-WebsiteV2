"use server";
import { hashUserPassword, verifyPassword } from "./hashpassword";
import { createAuthSession, destroyAuthSession, github } from "./auth";
import { getUserByEmail, saveUser } from "./user";
import { redirect } from "next/navigation";
import { generateState } from "arctic";
import { cookies } from "next/headers";

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
  console.log(email, password);
  const existingUser = await getUserByEmail(email);
  console.log(existingUser);
  if (!existingUser) {
    return { errors: { email: "This Email Does not Exist" } };
  }
  const isValidPassword = verifyPassword(
    existingUser.hashed_password,
    password,
  );
  if (!isValidPassword) {
    return { errors: { password: "Wrong Password" } };
  }
  await createAuthSession(existingUser._id);
  redirect("/");
}

export async function Logout() {
  const result = await destroyAuthSession();
  console.log(result);
  redirect("/");
}
export async function GithubAuth() {
  const state = generateState();
  const url = await github.createAuthorizationURL(state);

  cookies().set("github_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  redirect(url);
}
