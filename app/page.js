"use client";
import Button from "@/components/formFields/Button";
import { VortexDemo } from "@/components/vortex";
import { TypewriterEffectSmooth } from "@/ui/typewriter-effect";
import React from "react";
export default function HomePage() {
  const words = [
    {
      text: "Create",
      className: "text-white text-4xl",
    },
    {
      text: "Awesome",
      className: "text-white text-4xl",
    },
    {
      text: "Stuff",
      className: "text-white text-4xl",
    },
    {
      text: "with",
      className: "text-white text-4xl",
    },
    {
      text: "Rofies",
      className: "text-blue-500 dark:text-blue-500 text-9xl font-bold",
    },
  ];
  return (
    <VortexDemo>
      <section className="hero flex min-h-screen items-center justify-center bg-cover bg-center">
        <div className="flex h-[40rem] flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button className="relative p-[3px]">Join Us</Button>
            <Button className="relative p-[3px]">View More</Button>
          </div>
        </div>
      </section>
    </VortexDemo>
  );
}
