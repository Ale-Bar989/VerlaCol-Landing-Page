import { createContext } from "react";
import type { ThemeContextType } from "./theme.types";

// Contexto de tema
// Ubicación: src/contexts/theme.context.ts

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
