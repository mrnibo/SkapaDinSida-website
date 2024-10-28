import Link from "next/link";
import React from "react";

interface NavbarItemsProps {
  name: string;
  href: string;
}
const NavbarItems: React.FC<NavbarItemsProps> = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="text-foreground hover:text-primary text-lg font-medium block py-2"
    >
      {name}
    </Link>
  );
};

export default NavbarItems;
