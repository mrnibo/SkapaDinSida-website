import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // usePathname for checking active path
import { motion } from "framer-motion";

interface NavbarItemsProps {
  name: string;
  href: string;
  className?: string;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ name, href, className }) => {
  const pathname = usePathname();
  // Remove locale prefix (e.g., "/en", "/sv") from pathname
  const sanitizedPath = pathname.replace(/^\/(en|sv)/, "");

  // Check if the sanitized path matches the href
  const isActive =
    sanitizedPath === href || (sanitizedPath === "" && href === "/");

  return (
    <div className="relative flex flex-col items-center">
      <Link
        href={href}
        className={`text-foreground text-lg font-medium block py-2 hover:text-blue-500 ${className} duration-500`}
        aria-label={`Navigate to page ${name}`}
      >
        {name}
      </Link>
      {isActive && (
        <motion.div
          layoutId="activeNavDot"
          className="absolute bottom-0 h-[3px] w-[16px] bg-blue-500 rounded-full"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      )}
    </div>
  );
};

export default NavbarItems;
