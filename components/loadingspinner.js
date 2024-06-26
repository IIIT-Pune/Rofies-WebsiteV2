"use client";
import { dotPulse } from "ldrs";
import { useTheme } from "next-themes";

export default function GalleryLoading() {
  miyagi.register();
  const { theme } = useTheme();
  return (
    <div className="flex h-screen items-center justify-center">
      {theme === "dark" ? (
        <l-miyagi size="100" stroke="3.5" speed="0.9" color="white" />
      ) : (
        <l-miyagi size="100" stroke="3.5" speed="0.9" color="black" />
      )}
    </div>
  );
}

import { miyagi } from "ldrs";

miyagi.register();

// Default values shown
