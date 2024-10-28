"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function NavbarThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="bg-gray-100 focus:bg-gray-200"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <IconSun className="h-10 w-10" aria-label="Switch to dark theme" />
      ) : (
        <IconMoon
          className="h-10 w-10"
          color="black"
          aria-label="Switch to light theme"
        />
      )}
    </Button>
  );
}
