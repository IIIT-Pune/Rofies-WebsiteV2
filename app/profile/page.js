"use client";
import { Button } from "@/components/ui/button";
import { Logout } from "@/lib/actions";

export default function LogoutPage() {
  return (
    <form action={Logout}>
      <Button>Logout</Button>
    </form>
  );
}
