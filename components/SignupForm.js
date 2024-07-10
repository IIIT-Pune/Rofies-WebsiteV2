"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Signup } from "@/lib/actions";
import { useFormState } from "react-dom";
import { ErrorAlert } from "./ErrorAlert";
import SubmitButton from "./SubmitButton";
import Link from "next/link";
export default function SignupForm() {
  const [state, formAction] = useFormState(Signup, {});
  return (
    <div className="grid gap-4">
      <form action={formAction}>
        <div className="grid gap-2">
          <Label htmlFor="email">Username</Label>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="John Doe"
            required
            className="p-4"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="pt-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2 pb-4">
          <Label htmlFor="password" className="pt-2">
            Password
          </Label>
          <Input id="password" type="password" required name="password" />
        </div>
        <SubmitButton className={"w-full"} label={"Sign Up"} />
      </form>
      {state.errors && <ErrorAlert errors={state.errors} />}
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}
