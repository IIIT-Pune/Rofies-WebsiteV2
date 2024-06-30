import { Button } from "@/components/ui/button";
import { destroyAuthSession } from "@/lib/auth";

export default async function LogoutPage() {
  return (
    <form action={destroyAuthSession}>
      <Button type="submit">Logout</Button>
    </form>
  );
}
