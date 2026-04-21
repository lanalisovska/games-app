"use client";

import { IconBtn } from "@uikit/index";
import { useThemeContext } from "@src/providers/ThemeProvider";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <IconBtn
      name={isDark ? "sun" : "moon"}
      size="md"
      label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    />
  );
};
