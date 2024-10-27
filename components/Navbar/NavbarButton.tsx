import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PulsatingButton from "@/components/ui/pulsating-button";

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
    <PulsatingButton>
      <Link href={link} aria-label="">
        <div className={`flex gap-2 items-center ${className}`}>
          {icon}
          {text}
        </div>
      </Link>
    </PulsatingButton>
  );
};

export const NavbarButtonSecondary: React.FC<NavbarButtonProps> = ({
  text,
  className,
}) => {
  return <div></div>;
};
