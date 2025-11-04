import { useEffect, useState, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./theme.context";
import type { Theme } from "./theme.types";

// Provider de Tema - Optimizado con useMemo y useCallback
// Ubicación: src/contexts/theme.tsx

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light"; // Default to light
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);

    // Dispatch custom event for components using useLocalTheme
    window.dispatchEvent(new CustomEvent("themeChange", { detail: theme }));
  }, [theme]);

  // Memoizar toggleTheme para evitar recreación en cada render
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  // Memoizar el value del contexto para evitar re-renders innecesarios
  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
