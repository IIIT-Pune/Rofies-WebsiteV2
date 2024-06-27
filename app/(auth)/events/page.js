import { verifyAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function EventsPage() {
  const result = await verifyAuthSession();
  if (!result.user) {
    return redirect("/signup");
  }
  return <h1 className="text-orange-700"> Events pages</h1>;
}
