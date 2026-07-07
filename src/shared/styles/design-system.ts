// Sistema de Diseño Centralizado - Colores, Gradientes y Sombras
// Ubicación: src/shared/styles/design-system.ts

/**
 * Paleta de colores base del proyecto
 */
export const COLORS = {
  primary: '#5B6FFF',
  secondary: '#7A8FFF',
  accent: '#4A5CFF',
  white: '#FFFFFF',
  black: '#000000',
} as const;

/**
 * Gradientes reutilizables siguiendo la paleta azul clara
 */
export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
  primaryWithWhite: 'linear-gradient(135deg, #5B6FFF, #7A8FFF, #FFFFFF)',
  accent: 'linear-gradient(135deg, #4A5CFF, #5B6FFF)',
  accentWithWhite: 'linear-gradient(135deg, #4A5CFF, #FFFFFF, #7A8FFF)',
  reverse: 'linear-gradient(135deg, #7A8FFF, #5B6FFF)',
  diagonal: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)',
  title: 'linear-gradient(90deg, #4A5CFF 0%, #FFFFFF 25%, #7A8FFF 50%, #FFFFFF 75%, #4A5CFF 100%)',
  titleDark: 'linear-gradient(90deg, #5B6FFF 0%, #7A8FFF 25%, #FFFFFF 50%, #7A8FFF 75%, #5B6FFF 100%)',
} as const;

/**
 * Sombras predefinidas para diferentes niveles de elevación
 */
export const SHADOWS = {
  small: '0 4px 12px rgba(91, 111, 255, 0.1)',
  medium: '0 4px 20px rgba(91, 111, 255, 0.2)',
  large: '0 8px 32px rgba(91, 111, 255, 0.3)',
  xl: '0 10px 40px rgba(91, 111, 255, 0.3)',
  glow: '0 0 30px rgba(91, 111, 255, 0.1)',
} as const;

/**
 * Colores con transparencia (RGBA)
 */
export const RGBA_COLORS = {
  primary: {
    10: 'rgba(91, 111, 255, 0.1)',
    15: 'rgba(91, 111, 255, 0.15)',
    20: 'rgba(91, 111, 255, 0.2)',
    30: 'rgba(91, 111, 255, 0.3)',
    40: 'rgba(91, 111, 255, 0.4)',
    50: 'rgba(91, 111, 255, 0.5)',
  },
  secondary: {
    10: 'rgba(122, 143, 255, 0.1)',
    15: 'rgba(122, 143, 255, 0.15)',
    20: 'rgba(122, 143, 255, 0.2)',
    30: 'rgba(122, 143, 255, 0.3)',
    40: 'rgba(122, 143, 255, 0.4)',
    50: 'rgba(122, 143, 255, 0.5)',
  },
  accent: {
    10: 'rgba(74, 92, 255, 0.1)',
    15: 'rgba(74, 92, 255, 0.15)',
    20: 'rgba(74, 92, 255, 0.2)',
    30: 'rgba(74, 92, 255, 0.3)',
    40: 'rgba(74, 92, 255, 0.4)',
    50: 'rgba(74, 92, 255, 0.5)',
  },
  black: {
    50: 'rgba(0, 0, 0, 0.5)',
    75: 'rgba(0, 0, 0, 0.75)',
    95: 'rgba(0, 0, 0, 0.95)',
  },
  white: {
    '05': 'rgba(255, 255, 255, 0.05)',
    '10': 'rgba(255, 255, 255, 0.1)',
    '30': 'rgba(255, 255, 255, 0.3)',
  },
} as const;

/**
 * Bordes con colores del sistema
 */
export const BORDERS = {
  light: `1px solid ${RGBA_COLORS.primary[10]}`,
  medium: `1px solid ${RGBA_COLORS.primary[20]}`,
  strong: `2px solid ${RGBA_COLORS.primary[30]}`,
  white: '1px solid rgba(255, 255, 255, 0.3)',
} as const;

/**
 * Gradientes de fondo para overlays
 */
export const OVERLAY_GRADIENTS = {
  dark: {
    top: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)',
    bottom: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)',
  },
  light: {
    top: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3), transparent)',
    bottom: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.3), transparent)',
  },
} as const;

/**
 * Efectos de blur
 */
export const BLUR_EFFECTS = {
  small: '6px',
  medium: '12px',
  large: '15px',
  xl: '120px',
  xxl: '140px',
} as const;

// Exportar todo el sistema
export const DESIGN_SYSTEM = {
  colors: COLORS,
  gradients: GRADIENTS,
  shadows: SHADOWS,
  rgba: RGBA_COLORS,
  borders: BORDERS,
  overlays: OVERLAY_GRADIENTS,
  blur: BLUR_EFFECTS,
} as const;
