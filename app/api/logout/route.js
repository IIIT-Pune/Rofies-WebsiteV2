import { Logout } from "@/lib/actions";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
  const result = await Logout();
  if (result.error) {
    return new Response(result.error, {
      status: 400,
    });
  }
  if (result.success) {
    revalidatePath("/");
    return NextResponse.redirect(new URL("/", request.url));
  }
}
