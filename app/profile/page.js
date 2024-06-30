"use client";
import { Button } from "@/components/ui/button";
import { Logout } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  const handleLogout = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const res = await Logout();
      if (res.success) {
        router.push("/");
      }
    } catch (error) {
      // Handle any errors that occur during logout
      console.error("Logout failed", error);
      // Optionally, show an error message to the user
    }
  };
  return (
    <form onSubmit={handleLogout}>
      <Button>Logout</Button>
    </form>
  );
}
