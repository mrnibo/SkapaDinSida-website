"use client";

import React, { useState, Suspense } from "react";
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
import { useTranslations } from "next-intl";
import { NavbarThemeButton } from "./NavbarThemeButton";

// Lazy import components
const NavbarItems = React.lazy(() => import("./NavbarItems"));
const LanguageSwitcher = React.lazy(() => import("./NavbarLanguageSwitcher"));
const NavbarLogo = React.lazy(() => import("./NavbarLogo"));

const Navbar: React.FC = React.memo(() => {
  const t = useTranslations("navbar");

  // Define nav items based on translations
  const navItems = [
    { title: t("navbarLinks.home.title"), href: t("navbarLinks.home.link") },
    { title: t("navbarLinks.about.title"), href: t("navbarLinks.about.link") },
    {
      title: t("navbarLinks.services.title"),
      href: t("navbarLinks.services.link"),
    },
    {
      title: t("navbarLinks.contact.title"),
      href: t("navbarLinks.contact.link"),
    },
  ];

  return (
    <nav className="hidden md:flex justify-between items-center w-full px-4">
      <div>
        <Link href="/" className="text-2xl font-bold">
          <Suspense fallback={<span>Loading...</span>}>
            <NavbarLogo />
          </Suspense>
        </Link>
      </div>
      <div className="flex gap-24 items-center">
        <ul className="flex gap-12">
          {navItems.map((item) => (
            <li key={item.title}>
              <Suspense fallback={<span>Loading...</span>}>
                <NavbarItems name={item.title} href={item.href} />
              </Suspense>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <NavbarButtonPrimary
            text={t("buttonPrimaryText")}
            link={t("buttonPrimaryLink")}
            icon={<IconLayoutFilled />}
          />
          <NavbarThemeButton />
          <Suspense fallback={<span>Loading...</span>}>
            <LanguageSwitcher />
          </Suspense>
        </div>
      </div>
    </nav>
  );
});

const NavbarMobile: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");

  const navItems = [
    { name: t("navbarLinks.home.title"), href: "/" },
    { name: t("navbarLinks.about.title"), href: "/about" },
    { name: t("navbarLinks.services.title"), href: "/service" },
    { name: t("navbarLinks.contact.title"), href: "/contact" },
  ];

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
              <Suspense fallback={<span>Loading...</span>}>
                <NavbarLogo />
              </Suspense>
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <div className="flex justify-center items-center w-full">
            <NavbarButtonSecondary
              text={t("buttonPrimaryText")}
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
});

export default function NavbarClient() {
  return (
    <div className="py-6 px-12">
      <div className="container mx-auto flex h-16 items-center">
        <Navbar />
        <div className="md:hidden mr-2 flex items-center">
          <Link href="/" className="text-2xl font-bold mr-auto">
            <Suspense fallback={<span>Loading...</span>}>
              <NavbarLogo />
            </Suspense>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 md:justify-end md:hidden">
          <NavbarThemeButton />
          <Suspense fallback={<span>Loading...</span>}>
            <NavbarMobile />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
