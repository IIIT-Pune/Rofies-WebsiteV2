import { lucia } from "@/lib/auth";
import { deleteExpiredSessions } from "@/lib/cron";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  if (
    request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return response.status(401).end("Unauthorized");
  }
  const FiveDaysAgo = new Date(new Date().setDate(new Date().getDate() - 5));
  const deletedCount = await deleteExpiredSessions(FiveDaysAgo);
  console.log(deletedCount, "Logs since", FiveDaysAgo, "have been cleared");
  await lucia.deleteExpiredSessions();

  return NextResponse.json({ ok: true });
}
