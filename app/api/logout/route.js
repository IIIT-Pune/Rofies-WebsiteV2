import { Logout } from "@/lib/actions";
import { destroyAuthSession } from "@/lib/auth";

export async function GET(request) {
  const res = await Logout();
  if (res.error) {
    return new Response(JSON.stringify({ error: res.error }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (res.success) {
    // Set a header to instruct the client to redirect. This is just an example, actual implementation may vary.
    return new Response(
      JSON.stringify({ success: true, message: "Logout successful" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
