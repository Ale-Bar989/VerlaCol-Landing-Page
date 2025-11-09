// Logger condicional para desarrollo
// Solo muestra logs en modo desarrollo
// Ubicación: src/shared/utils/logger.ts

const isDev = import.meta.env.DEV;

type LogArgs = unknown[];

export const logger = {
  log: (...args: LogArgs) => {
    if (isDev) {
      console.log(...args);
    }
  },
  
  error: (...args: LogArgs) => {
    // Errores siempre se muestran
    console.error(...args);
  },
  
  warn: (...args: LogArgs) => {
    if (isDev) {
      console.warn(...args);
    }
  },
  
  info: (...args: LogArgs) => {
    if (isDev) {
      console.info(...args);
    }
  },
  
  debug: (...args: LogArgs) => {
    if (isDev) {
      console.debug(...args);
    }
  },
};
