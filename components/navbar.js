import React from "react";
import { FloatingNav } from "./ui/navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export async function MainHeader({ isUserAuthenticated }) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} isAuthenticated={isUserAuthenticated} />
    </div>
  );
}
