"use client";

import { createContext, useContext } from "react";
import { useTheme } from "@hooks/useTheme";
import type { TTheme } from "@src/types";

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useTheme();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
