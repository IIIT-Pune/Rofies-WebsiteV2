import LoginForm from "@/components/LoginForm";
import ServiceLogin from "@/components/ServiceLogin";
import Link from "next/link";

export default function LoginPage() {
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
        <LoginForm />
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
            <ServiceLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
