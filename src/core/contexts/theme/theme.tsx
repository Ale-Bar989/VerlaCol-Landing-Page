import { useEffect, useState, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./theme.context";
import type { Theme } from "./theme.types";
import { 
  defaultStorage, 
  defaultThemeApplier,
  type IStorage,
  type IThemeApplier 
} from "@/core/services";

// Provider de Tema - Optimizado con DIP (Dependency Inversion Principle)
// Ubicación: src/contexts/theme.tsx
// Usa IStorage e IThemeApplier en lugar de implementaciones directas

interface ThemeProviderProps {
  children: ReactNode;
  storage?: IStorage; // Inyección de dependencia opcional
  themeApplier?: IThemeApplier; // Inyección de dependencia opcional
}

export function ThemeProvider({ 
  children, 
  storage = defaultStorage,
  themeApplier = defaultThemeApplier
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check storage first (abstracción en lugar de localStorage directo)
    const savedTheme = storage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light"; // Default to light
  });

  // Apply theme to document
  useEffect(() => {
    // Usar themeApplier en lugar de manipular DOM directamente
    themeApplier.apply(theme);

    // Save to storage (abstracción)
    storage.setItem("theme", theme);

    // Dispatch custom event for components using useLocalTheme
    window.dispatchEvent(new CustomEvent("themeChange", { detail: theme }));
  }, [theme, storage, themeApplier]);

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
