"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { GithubAuth, GoogleAuth, Login } from "@/lib/actions";
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
              className="text-gray-900 dark:text-gray-400"
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
              className="text-gray-900 dark:text-gray-400"
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
          <div className="flex items-center justify-center gap-6">
            <form action={GoogleAuth}>
              <Button className="font-geist relative mx-auto flex h-12 w-full items-center justify-center overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-center tracking-tighter text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
                <GoogleIcon className="mr-2 h-6 w-6" />
                Sign in with Google
              </Button>
            </form>
            <form action={GithubAuth}>
              <Button className="font-geist relative mx-auto flex h-12 w-full items-center justify-center overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-center tracking-tighter text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
                <GithubIcon className="mr-2 h-6 w-6" />
                Sign in with GitHub
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
    >
      <path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"></path>
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
