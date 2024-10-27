"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function NavbarThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!theme) {
    return null;
  } else {
    return (
      <>
        <Button variant="outline" size="icon">
          {theme === "light" ? (
            <Sun className="h-5 w-5" aria-label="Switch to dark theme" />
          ) : (
            <Moon className="h-5 w-5" aria-label="Switch to light theme" />
          )}
        </Button>
      </>
    );
  }
}
