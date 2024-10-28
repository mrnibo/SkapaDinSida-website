import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { navLogoItems } from "@/constants/Constants";
import { useThemeSafe } from "@/hooks/useThemeSafe";

const NavbarLogo = () => {
  const { theme } = useThemeSafe();

  const logoSrc = navLogoItems.dark;
  const logoToDisplay = theme === "dark" ? navLogoItems.light : logoSrc;

  return (
    <div className="flex gap-2 items-center text-md font-normal">
      <Image src={logoToDisplay} alt="logo" width={32} height={32} />{" "}
      SkapaDinSida
    </div>
  );
};

export default NavbarLogo;
