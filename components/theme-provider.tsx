// theme-provider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps
  extends React.ComponentPropsWithoutRef<typeof NextThemesProvider> {
  enableSystem?: boolean;
  enableColorScheme?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      storageKey="theme" // Persistent across sessions
      enableColorScheme // Syncs with `prefers-color-scheme`
    >
      {children}
    </NextThemesProvider>
  );
}
