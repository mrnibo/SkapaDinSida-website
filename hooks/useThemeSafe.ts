import { useTheme as useNextTheme } from 'next-themes';

export const useThemeSafe = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();

  const effectiveTheme = theme || resolvedTheme || 'light';

  return { theme: effectiveTheme, setTheme };
};
