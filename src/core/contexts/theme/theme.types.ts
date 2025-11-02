// Tipos del contexto de tema
// Ubicación: src/contexts/theme.types.ts

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
