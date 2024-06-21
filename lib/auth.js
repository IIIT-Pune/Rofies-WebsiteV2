import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";
import { cookies } from "next/headers";

const adapter = new MongodbAdapter(
  mongoose.connection.collection("sessions"),
  mongoose.connection.collection("users"),
);
const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: 60 * 60 * 24,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
}

export async function verifyAuthSession() {
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  if (!sessionCookie || !sessionCookie.value) {
    return {
      user: null,
      session: null,
    };
  }
  const result = await lucia.validateSession(sessionCookie.value);
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    }
  } catch (error) {
    console.error(error);
  }
  return result;
}

export async function destroyAuthSession() {
  const { session } = await verifyAuthSession();
  if (!session) {
    return {
      error: "User not logged in.",
    };
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
}
