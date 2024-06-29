"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Login } from "@/lib/actions";
import { ErrorAlert } from "./ErrorAlert";
import { Button } from "./ui/button";
export default function LoginForm() {
  const [state, formAction] = useFormState(Login, {});
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center px-4">
      <div className="z-10 mx-auto w-full max-w-[500px] text-gray-700">
        <div className="mb-8 text-center">
          <h1 className="font-geist text-3xl font-bold tracking-tighter text-secondary-foreground">
            Welcome back
          </h1>
          <p className="font-geist font-normal text-gray-800/90 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
        {state.errors && <ErrorAlert errors={state.errors} />}
        <form className="space-y-4" action={formAction}>
          <div>
            <Label
              htmlFor="email"
              className="font-bold text-secondary-foreground"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              name="email"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="font-bold text-secondary-foreground"
            >
              Password
            </Label>
            <Input
              id="password"
              placeholder="••••••••"
              required
              name="password"
              type="password"
            />
          </div>
          <Button className="font-geist relative mx-auto h-12 w-full overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-center tracking-tighter text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
            <span className="relative">Sign In</span>
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link
              className="ml-2 font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-secondary-foreground"
              href="/signup"
            >
              Sign up
            </Link>
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Forgot your password?
            <Link
              className="ml-2 font-medium text-gray-900 underline-offset-4 hover:underline dark:text-secondary-foreground"
              href="#"
            >
              Reset password
            </Link>
          </p>
        </div>
        <div className="mt-6 border-t pt-6">
          <div className="flex items-center justify-center gap-4">
            <button className="font-geist relative mx-auto flex h-12 w-full items-center justify-center overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-center tracking-tighter text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
              <GithubIcon className="mr-2 h-4 w-4" />
              Sign in with GitHub
            </button>
            <button className="font-geist relative mx-auto flex h-12 w-full items-center justify-center overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-center tracking-tighter text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
              <ChromeIcon className="mr-2 h-4 w-4" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
