import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const NavbarLogo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default logo (light theme)
  const logoSrc = "/images/brand/logo-icon-light.png";

  // Update logo based on theme after mounting
  const logoToDisplay =
    mounted && theme === "dark" ? "/images/brand/logo-icon-dark.png" : logoSrc;

  return <Image src={logoToDisplay} alt="logo" width={25} height={25} />;
};

export default NavbarLogo;
