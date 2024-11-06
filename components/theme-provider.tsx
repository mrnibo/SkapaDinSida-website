"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps
  extends React.ComponentPropsWithoutRef<typeof NextThemesProvider> {
  enableSystem?: boolean;
  enableColorScheme?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return null or a loader/spinner during the initial server-side render
    return <>{children}</>;
  }

  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="light">
      {children}
    </NextThemesProvider>
  );
}
