import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { navLogoItems } from "@/constants/Constants";

const NavbarLogo = () => {
  const { theme } = useTheme();

  const logoSrc = navLogoItems.dark;

  const logoToDisplay = theme === "dark" ? navLogoItems.light : logoSrc;

  return <Image src={logoToDisplay} alt="logo" width={25} height={25} />;
};

export default NavbarLogo;
