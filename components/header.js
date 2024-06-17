"use client";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  UserGroupIcon,
  UserPlusIcon,
  KeyIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { createElement, useEffect, useState } from "react";
import AccountCircleIcon from "@/assets/icons/account-circle.svg";
import { usePathname } from "next/navigation";
// profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Edit Profile",
//     icon: Cog6ToothIcon,
//   },
//   {
//     label: "Help",
//     icon: LifebuoyIcon,
//   },
//   {
//     label: "Sign Out",
//     icon: PowerIcon,
//   },
// ];

const profileMenuItemsLoggedOut = [
  {
    label: "Sign up",
    icon: UserPlusIcon,
    link: "/signup",
  },
  {
    label: "Login",
    icon: KeyIcon,
    link: "/login",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const path = usePathname();
  const showMenu = path === "/login" || path === "/signup";
  return (
    !showMenu && (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="Account Circle"
              className="border border-gray-900 object-cover"
              src={AccountCircleIcon.src}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>

        <MenuList className="p-1">
          {profileMenuItemsLoggedOut.map(({ label, icon, link }, key) => {
            const isLastItem = key === profileMenuItemsLoggedOut.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                <Link href={link} className="flex items-center gap-2 rounded">
                  {createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    )
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Github",
    description:
      "The Github Page of Rofies, where you can find the source codes of all the project conducted ",
    link: "https://github.com/ROFIES-IIITP",
  },
  {
    title: "Our College",
    description:
      "The Official Website of Indian Institute of Information Technology, Pune",
    link: "https://www.iiitp.ac.in/",
  },
  {
    title: "Hall Of Fame",
    description: "R.O.F.I.E.S hall Of Fame",
    link: "/gallery",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ title, description, link }) => (
    <Link href={link} key={title} rel="noopener noreferrer">
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-cyan-900" />{" "}
              About Us{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-1 gap-1 overflow-visible lg:grid">
          {renderItems}
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-cyan-900" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>
  );
}

// nav list component
const navListItems = [
  {
    label: "Our Team",
    icon: UserGroupIcon,
  },
  {
    label: "Events",
    icon: CubeTransparentIcon,
  },
];

function NavList() {
  return (
    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href={"/"}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {createElement(icon, {
              className: "h-[18px] w-[18px] text-cyan-900",
            })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function MainHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="relative mx-auto max-w-screen-xl bg-opacity-50 p-2 backdrop-blur-lg backdrop-filter lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="ml-2 mr-4 cursor-pointer py-1.5 font-medium"
        >
          R.O.F.I.E.S
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
