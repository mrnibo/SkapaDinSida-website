import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarButtonProps {
  text: string;
  icon?: React.ReactNode;
  link: string;
  className?: string;
}
export const NavbarButtonPrimary: React.FC<NavbarButtonProps> = ({
  text,
  icon,
  link,
  className,
}) => {
  return (
    <Link href={link} aria-label={`${text} Button`}>
      <Button
        size="lg"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-md shadow-lg"
      >
        <div className={`flex gap-2 items-center ${className}`}>
          {icon}
          {text}
        </div>
      </Button>{" "}
    </Link>
  );
};

export const NavbarButtonSecondary: React.FC<NavbarButtonProps> = ({
  text,
  icon,
  link,
  className,
}) => {
  return (
    <Button variant="default" size="default" className={className}>
      <Link
        href={link}
        aria-label={`${text} Button`}
        className="flex gap-2 items-center"
      >
        {icon}
        {text}
      </Link>
    </Button>
  );
};
