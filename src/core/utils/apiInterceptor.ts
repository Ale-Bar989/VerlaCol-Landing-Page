// Interceptor global de fetch para detectar errores de API
// Ubicación: src/core/utils/apiInterceptor.ts
// Responsabilidad única: Interceptar y manejar errores HTTP

import { ROUTES } from '@/core/router/routes.config';

export interface ApiError {
  status: number;
  message: string;
  url: string;
  timestamp: Date;
}

// Callback para manejar errores (será usado por el hook)
type ErrorCallback = (error: ApiError) => void;
let errorCallback: ErrorCallback | null = null;

export const setApiErrorCallback = (callback: ErrorCallback) => {
  errorCallback = callback;
};

// Guardar el fetch original
const originalFetch = window.fetch;

/**
 * Interceptor de fetch que detecta errores HTTP automáticamente
 * Redirige a páginas de error según el código de estado
 */
export const setupApiInterceptor = () => {
  window.fetch = async (...args) => {
    try {
      const response = await originalFetch(...args);
      
      // Si la respuesta no es OK, manejar el error
      if (!response.ok) {
        const error: ApiError = {
          status: response.status,
          message: response.statusText,
          url: args[0] as string,
          timestamp: new Date(),
        };

        // Notificar al callback si existe
        if (errorCallback) {
          errorCallback(error);
        }

        // Log en desarrollo
        if (import.meta.env.DEV) {
          console.error('🚨 API Error:', error);
        }

        // Determinar la ruta de error según el código
        let errorRoute: string | null = null;
        
        switch (response.status) {
          case 500:
          case 502:
          case 504:
            // Error del servidor
            errorRoute = ROUTES.NOTFOUND; // Temporalmente, luego crear ruta específica
            break;
          case 503:
            // Servicio no disponible
            errorRoute = ROUTES.SERVICE_UNAVAILABLE;
            break;
          case 404:
            // No encontrado (solo si es una API crítica)
            if (isCriticalApi(args[0] as string)) {
              errorRoute = ROUTES.NOTFOUND;
            }
            break;
          default:
            // Otros errores no redirigen automáticamente
            break;
        }

        // Redirigir si es necesario
        if (errorRoute && shouldRedirect(response.status)) {
          // Pequeño delay para permitir que el componente maneje el error primero
          setTimeout(() => {
            window.location.href = errorRoute;
          }, 100);
        }
      }

      return response;
    } catch (error) {
      // Error de red (sin conexión)
      if (!navigator.onLine) {
        window.location.href = ROUTES.NO_CONNECTION;
      }

      // Re-lanzar el error para que el código que llamó fetch pueda manejarlo
      throw error;
    }
  };
};

/**
 * Determina si una URL es una API crítica
 * APIs críticas causan redirección automática en error
 * Funciona con CUALQUIER API (propia o externa)
 */
const isCriticalApi = (url: string): boolean => {
  const criticalPatterns = [
    // APIs propias
    '/api/auth',
    '/api/user',
    '/api/config',
    '/api/contact',
    
    // APIs externas críticas (ejemplos)
    'api.stripe.com',
    'api.sendgrid.com',
    'firestore.googleapis.com',
    
    // Agregar más según necesites
  ];
  
  return criticalPatterns.some(pattern => url.includes(pattern));
};

/**
 * Determina si se debe redirigir automáticamente
 * Evita redirecciones en APIs no críticas
 */
const shouldRedirect = (status: number): boolean => {
  // Solo redirigir en errores de servidor (5xx)
  return status >= 500 && status < 600;
};

/**
 * Restaurar el fetch original (útil para tests)
 */
export const restoreOriginalFetch = () => {
  window.fetch = originalFetch;
};
