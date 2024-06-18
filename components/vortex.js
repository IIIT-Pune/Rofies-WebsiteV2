import React from "react";
import { Vortex } from "@/ui/vortex";

export function VortexDemo({ children }) {
  return (
    <div className="mx-auto h-[30rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
      <Vortex
        backgroundColor="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"
        className="flex h-full w-full flex-col items-center justify-center py-4 md:px-10"
      >
        {children}
      </Vortex>
    </div>
  );
}
