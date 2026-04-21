"use client";

import { useCallback, useState } from "react";
import type { TTheme } from "@src/types";

const STORAGE_KEY = "theme";
const DEFAULT_THEME: TTheme = "dark";

const getStoredTheme = (): TTheme => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

export const useTheme = () => {
  // Lazy initializer reads localStorage once — avoids the useEffect double-render
  const [theme, setTheme] = useState<TTheme>(() =>
    typeof window === "undefined" ? DEFAULT_THEME : getStoredTheme()
  );

  const applyTheme = useCallback((next: TTheme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage may be unavailable (private mode, quota exceeded)
    }
    setTheme(next);
  }, []);

  const toggleTheme = useCallback(
    () => applyTheme(theme === "dark" ? "light" : "dark"),
    [theme, applyTheme]
  );

  return { theme, toggleTheme, isDark: theme === "dark" };
};
