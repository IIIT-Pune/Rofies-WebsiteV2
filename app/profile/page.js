"use client";
import { Button } from "@/components/ui/button";
export default function ProfilePage() {
  const handleLogoutSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("/api/logout");
      const result = await response.json();
      if (result.success) {
        console.log("Logout successful");
        window.location.href = "/";
      } else {
        console.error(result.error || "Logout failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className="text-orange-400">Profile Page</h1>
      <form onSubmit={handleLogoutSubmitHandler}>
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
}
