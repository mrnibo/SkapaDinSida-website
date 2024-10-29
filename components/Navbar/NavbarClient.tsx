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
import { NavbarButtonPrimary, NavbarButtonSecondary } from "./NavbarButton";
import { NavbarThemeButton } from "./NavbarThemeButton";
import NavbarLogo from "./NavbarLogo";
import NavbarItems from "./NavbarItems";
import { navItems } from "@/constants/Constants";

const Navbar = () => {
  return (
    <nav className="hidden md:flex justify-between items-center w-full px-4">
      <div>
        <Link href="/" className="text-2xl font-bold">
          <NavbarLogo />
        </Link>
      </div>
      <div className="flex gap-24 items-center">
        <ul className="flex gap-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavbarItems name={item.name} href={item.href} className="" />
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <NavbarButtonPrimary
            text="Get Started"
            link="/contact"
            icon={<IconLayoutFilled />}
          />
          <NavbarThemeButton />
        </div>
        <div></div>
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
          <DrawerTitle className="flex justify-center items-center">
            <Link
              href="/"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              <NavbarLogo />
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <div className="flex justify-center items-center w-full">
            {" "}
            <NavbarButtonSecondary
              text="Get Started"
              link="/contact"
              icon={<IconLayoutFilled />}
              className="text-lg w-full bg-blue-500 mb-5"
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
        </div>
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
    <div className="py-6 px-12">
      <div className="container mx-auto flex h-16 items-center">
        <Navbar />
        <div className="md:hidden mr-2 flex jus items-center">
          <Link href="/" className="text-2xl font-bold mr-auto">
            <NavbarLogo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 md:justify-end md:hidden">
          <NavbarThemeButton />
          <NavbarMobile />
        </div>
      </div>
    </div>
  );
}
