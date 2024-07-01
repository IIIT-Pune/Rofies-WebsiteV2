import { cookies } from "next/headers";

export function register() {
  cookies()
    .getAll()
    .map((cookie) => cookies().delete(cookie.name));
}
