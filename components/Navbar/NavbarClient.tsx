"use client";

import Link from "next/link";
import React, { useState, useMemo } from "react";
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
import NavbarLogo from "./NavbarLogo";
import NavbarItems from "./NavbarItems";
import { NavbarThemeButton } from "./NavbarThemeButton";
import LanguageSwitcher from "./NavbarLanguageSwitcher";
import { IconLayoutFilled, IconMenuDeep } from "@tabler/icons-react";
import { NavbarButtonPrimary, NavbarButtonSecondary } from "./NavbarButton";
import { useTranslations } from "next-intl";

const NavbarClient = ({ className }: { className?: string }) => {
  const t = useTranslations("navbar");

  const navbarData = useMemo(
    () => ({
      buttonPrimaryText: t("buttonPrimaryText"),
      buttonPrimaryLink: t("buttonPrimaryLink"),
      navbarLinks: {
        home: { link: "/", title: t("navbarLinks.home.title") },
        about: { link: "/about", title: t("navbarLinks.about.title") },
        services: { link: "/service", title: t("navbarLinks.services.title") },
        contact: { link: "/contact", title: t("navbarLinks.contact.title") },
      },
    }),
    [t]
  );

  return (
    <div className={className}>
      <div className="container mx-auto flex h-16 items-center">
        <MemoizedNavbar {...navbarData} />
        <div className="md:hidden mr-2 flex items-center">
          <Link href="/" className="text-2xl font-bold mr-auto">
            <NavbarLogo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 md:justify-end md:hidden">
          <NavbarThemeButton />
          <MemoizedNavbarMobile {...navbarData} />
        </div>
      </div>
    </div>
  );
};

interface NavbarProps {
  buttonPrimaryText: string;
  buttonPrimaryLink: string;
  navbarLinks: {
    home: { link: string; title: string };
    about: { link: string; title: string };
    services: { link: string; title: string };
    contact: { link: string; title: string };
  };
}

const Navbar: React.FC<NavbarProps> = ({
  buttonPrimaryText,
  buttonPrimaryLink,
  navbarLinks,
}) => {
  const navbarItems = useMemo(() => Object.values(navbarLinks), [navbarLinks]);

  return (
    <nav className="hidden md:flex justify-between items-center w-full px-4">
      <Link href="/" className="text-2xl font-bold">
        <NavbarLogo />
      </Link>
      <div className="flex gap-24 items-center">
        <ul className="flex gap-12">
          {navbarItems.map(({ title, link }) => (
            <li key={title}>
              <NavbarItems name={title} href={link} />
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <NavbarButtonPrimary
            text={buttonPrimaryText}
            link={buttonPrimaryLink}
            icon={<IconLayoutFilled />}
          />
          <NavbarThemeButton />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

const NavbarMobile: React.FC<NavbarProps> = ({
  buttonPrimaryText,
  buttonPrimaryLink,
  navbarLinks,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarItems = useMemo(() => Object.values(navbarLinks), [navbarLinks]);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="md:hidden text-black dark:text-white bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 shadow-lg"
          onClick={handleToggle}
        >
          <IconMenuDeep className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white dark:bg-black dark:text-white">
        <DrawerHeader>
          <DrawerTitle className="flex justify-center items-center">
            <Link href="/" className="text-2xl font-bold" onClick={handleClose}>
              <NavbarLogo />
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <div className="flex justify-center items-center w-full">
            <NavbarButtonSecondary
              text={buttonPrimaryText}
              link={buttonPrimaryLink}
              icon={<IconLayoutFilled />}
              className="text-lg w-full bg-blue-500 mb-5"
            />
          </div>
          <nav className="px-4">
            <ul className="space-y-4">
              {navbarItems.map(({ title, link }) => (
                <li key={title}>
                  <Link
                    href={link}
                    className="text-foreground hover:text-primary text-lg font-medium block py-2"
                    onClick={handleClose}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const MemoizedNavbar = React.memo(Navbar);
const MemoizedNavbarMobile = React.memo(NavbarMobile);

export default NavbarClient;
