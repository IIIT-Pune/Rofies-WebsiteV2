import { NextResponse } from "next/server";

export async function GET(request, response) {
  if (
    request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return response.status(401).end("Unauthorized");
  }
  await lucia.deleteExpiredSessions();
  return NextResponse.json({ ok: true });
}
