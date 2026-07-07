import { useContext } from "react";
import { ThemeContext } from "./theme.context";

// Hook personalizado para usar el tema
// Ubicación: src/contexts/useTheme.ts

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
