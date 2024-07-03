"use client";
import ServiceLogin from "@/components/ServiceLogin";
import SignupForm from "@/components/SignupForm";
import { Globe } from "@/components/globe";

export default function SignupPage() {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Signup</h1>
              <p className="text-balance text-muted-foreground">
                Enter your information below to get started
              </p>
            </div>
            <SignupForm />
            <hr className="my-2 border-t border-black dark:border-white" />
            <ServiceLogin />
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Globe />
        </div>
      </div>
    </>
  );
}
