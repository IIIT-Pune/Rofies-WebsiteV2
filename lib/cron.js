import { Session } from "@/models/models";

export async function deleteExpiredSessions(expiryDate) {
  await dbConnect();
  const result = await Session.deleteMany({ expires_at: { $lt: expiryDate } });
  return result.deletedCount;
}
