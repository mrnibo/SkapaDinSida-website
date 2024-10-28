import Link from "next/link";
import React from "react";

interface NavbarItemsProps {
  name: string;
  href: string;
  className?: string;
}
const NavbarItems: React.FC<NavbarItemsProps> = ({ name, href, className }) => {
  return (
    <Link
      href={href}
      className={`text-foreground text-lg font-medium block py-2 hover:text-blue-500 hover:-translate-y-1 ${className} duration-500`}
    >
      {name}
    </Link>
  );
};

export default NavbarItems;
