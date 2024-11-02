import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLogoItems } from "@/constants/Constants";
import { useTheme } from "next-themes";

interface NavbarLogoProps {
  isWithLogo?: boolean;
  className?: string;
}
const NavbarLogo: React.FC<NavbarLogoProps> = ({
  isWithLogo = true,
  className,
}) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders with theme after mounting on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fallback to light logo during SSR to prevent mismatches
  const logoToDisplay =
    isMounted && theme === "dark" ? navLogoItems.light : navLogoItems.dark;

  return (
    <div className={`flex gap-2 items-center text-md font-normal ${className}`}>
      {isWithLogo && (
        <Image src={logoToDisplay} alt="logo" width={32} height={32} />
      )}
      SkapaDinSida
    </div>
  );
};

export default NavbarLogo;
