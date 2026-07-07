// Hook para manejo local del tema sincronizado con localStorage
// Ubicación: src/shared/hooks/useLocalTheme.ts
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useLocalTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Escuchar cambios en localStorage para sincronizar con el tema global
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        setTheme(e.newValue as Theme);
      }
    };

    // Escuchar cambios en otras pestañas/ventanas
    window.addEventListener("storage", handleStorageChange);

    // Escuchar cambios en la misma pestaña (custom event)
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<Theme>;
      setTheme(customEvent.detail);
    };
    window.addEventListener("themeChange", handleThemeChange);

    // Verificar cambios periódicamente como fallback
    const interval = setInterval(() => {
      const currentTheme = localStorage.getItem("theme") as Theme | null;
      if (currentTheme && currentTheme !== theme) {
        setTheme(currentTheme);
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange", handleThemeChange);
      clearInterval(interval);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    isDark: theme === "dark",
    isLight: theme === "light",
    toggleTheme,
  };
};
