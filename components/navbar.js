import React from "react";
import { FloatingNav } from "./ui/navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { verifyAuthSession } from "@/lib/auth";
export async function MainHeader() {
  // const result = await verifyAuthSession();
  // const isLoggedIn = result.user ? true : false;
  const navItems = [
    {
      name: "Events",
      link: "/events",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
