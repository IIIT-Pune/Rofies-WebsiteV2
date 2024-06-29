"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe } from "@/components/globe";
import { GithubAuth, Signup } from "@/lib/actions";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useFormState } from "react-dom";
import { ErrorAlert } from "./ErrorAlert";
export default function SignupForm() {
  const [state, formAction] = useFormState(Signup, {});
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Signup</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information below to get started
            </p>
          </div>

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
              <Button className="w-full">Signup</Button>
            </form>
            {state.errors && <ErrorAlert errors={state.errors} />}
            <hr className="my-4 border-t border-black dark:border-white" />
            <Button variant="outline" className="w-full">
              <IconBrandGoogle size={20} />
              <span className="ml-2">Signup with Google</span>
            </Button>
            <form action={GithubAuth}>
              <Button variant="outline" className="w-full">
                <IconBrandGithub size={20} />
                <span className="ml-2">Signup with Github</span>
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Globe />
      </div>
    </div>
  );
}
