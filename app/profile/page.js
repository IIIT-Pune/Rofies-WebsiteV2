"use client";
import { Button } from "@/components/ui/button";
import { LogoutAction } from "@/lib/actions";

export default function ProfilePage() {
  const handleLogoutSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await LogoutAction();
    if (res.error) {
      console.error(res.error);
    }
    if (res.success) {
      console.log("Logout successful");
      window.location.href = "/";
    }
  };
  return (
    <>
      <form onSubmit={handleLogoutSubmitHandler}>
        <h1>Profile Page</h1>
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
}
