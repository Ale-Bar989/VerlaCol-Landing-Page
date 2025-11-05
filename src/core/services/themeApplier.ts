// Theme Applier Service - Abstracción de aplicación de temas (Dependency Inversion + Single Responsibility)
// Ubicación: src/core/services/themeApplier.ts
// Separa la lógica de aplicación de temas del DOM

import type { Theme } from '@/core/contexts/theme/theme.types';

/**
 * Interface para servicios de aplicación de temas
 * Implementa Dependency Inversion Principle (DIP)
 */
export interface IThemeApplier {
  /**
   * Aplica un tema al documento
   * @param theme - Tema a aplicar ('light' o 'dark')
   */
  apply(theme: Theme): void;
}

/**
 * Aplicador de temas usando DOM
 * Implementa Single Responsibility Principle (SRP)
 * Responsabilidad única: Aplicar temas al DOM
 */
export class DOMThemeApplier implements IThemeApplier {
  apply(theme: Theme): void {
    const root = document.documentElement;

    // Remover clases anteriores
    root.classList.remove('dark', 'light');
    
    // Agregar nueva clase
    root.classList.add(theme);
  }
}

/**
 * Aplicador de temas Mock para testing
 * Útil para tests sin DOM real
 */
export class MockThemeApplier implements IThemeApplier {
  public appliedTheme: Theme | null = null;
  public callCount: number = 0;

  apply(theme: Theme): void {
    this.appliedTheme = theme;
    this.callCount++;
  }

  reset(): void {
    this.appliedTheme = null;
    this.callCount = 0;
  }
}

/**
 * Aplicador de temas con CSS Variables
 * Alternativa que usa CSS custom properties
 */
export class CSSVariablesThemeApplier implements IThemeApplier {
  apply(theme: Theme): void {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--text-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#f5f5f5');
    }
  }
}

// Instancia por defecto
export const defaultThemeApplier: IThemeApplier = new DOMThemeApplier();
