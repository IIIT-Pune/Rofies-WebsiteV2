import { destroyAuthSession } from "@/lib/auth";
export const dynamic = "force-dynamic";
export async function GET(request) {
  const res = await destroyAuthSession();
  if (res.error) {
    return new Response(
      JSON.stringify({ message: res.error, success: false }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
  if (res.success) {
    // Set a header to instruct the client to redirect. This is just an example, actual implementation may vary.
    return new Response(
      JSON.stringify({ success: true, error: "Logout successful" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
