"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconLayoutFilled, IconMenuDeep } from "@tabler/icons-react";
import { navItems } from "./NavbarItems";
import { NavbarButtonPrimary } from "./NavbarButton";
import { NavbarThemeButton } from "./NavbarThemeButton";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <nav className="hidden md:flex justify-between items-center w-full px-4">
      <div>
        <Link href="/" className="text-2xl font-bold">
          <NavbarLogo />
        </Link>
      </div>
      <div className="flex gap-10 items-center">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <NavbarButtonPrimary
            text="Get Started"
            link="/contact"
            icon={<IconLayoutFilled />}
          />
        </div>
        <div>
          <NavbarThemeButton />
        </div>
      </div>
    </nav>
  );
};

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <IconMenuDeep className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <Link
              href="/"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              <NavbarLogo />
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex justify-center items-center w-full">
          {" "}
          <NavbarButtonPrimary
            text="Get Started"
            link="/contact"
            icon={<IconLayoutFilled />}
            className="text-lg px-16 py-4"
          />
        </div>

        <nav className="px-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary text-lg font-medium block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default function NavbarClient() {
  return (
    <div className="py-6">
      <div className="container mx-auto flex h-16 items-center max-w-4xl">
        <Navbar />
        <div className="md:hidden mr-2 flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold mr-auto">
            <NavbarLogo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <NavbarMobile />
        </div>
      </div>
    </div>
  );
}
