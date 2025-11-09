// Hook para manejar errores de API con redirección automática
// Ubicación: src/shared/hooks/useApiErrorHandler.ts
// Responsabilidad única: Manejar errores de API y redirigir

import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { setApiErrorCallback, type ApiError } from '@/core/utils/apiInterceptor';
import { ROUTES } from '@/core/router/routes.config';

export interface UseApiErrorHandlerOptions {
  /**
   * Si true, redirige automáticamente en errores 5xx
   * @default true
   */
  autoRedirect?: boolean;
  
  /**
   * Callback personalizado cuando ocurre un error
   */
  onError?: (error: ApiError) => void;
}

/**
 * Hook para manejar errores de API automáticamente
 * Detecta errores HTTP y redirige a páginas de error apropiadas
 * 
 * @param options - Opciones de configuración
 * 
 * @example
 * // En un componente
 * useApiErrorHandler({
 *   autoRedirect: true,
 *   onError: (error) => {
 *     console.log('Error detectado:', error);
 *   }
 * });
 * 
 * // Luego hacer fetch normalmente
 * const response = await fetch('/api/data');
 * // Si falla con 503, redirige automáticamente a /service-unavailable
 */
export const useApiErrorHandler = (options: UseApiErrorHandlerOptions = {}) => {
  const { autoRedirect = true, onError } = options;
  const navigate = useNavigate();

  const handleApiError = useCallback((error: ApiError) => {
    // Callback personalizado
    if (onError) {
      onError(error);
    }

    // Log en desarrollo
    if (import.meta.env.DEV) {
      console.error('🚨 API Error detectado:', {
        status: error.status,
        url: error.url,
        message: error.message,
        timestamp: error.timestamp,
      });
    }

    // Redirección automática si está habilitada
    if (autoRedirect) {
      let route: string | null = null;

      switch (error.status) {
        case 500:
        case 502:
        case 504:
          // Error del servidor - por ahora usa 404, luego crear página específica
          route = ROUTES.NOTFOUND;
          break;
        case 503:
          // Servicio no disponible
          route = ROUTES.SERVICE_UNAVAILABLE;
          break;
        default:
          // Otros errores no redirigen automáticamente
          break;
      }

      if (route) {
        // Pequeño delay para permitir que el componente maneje el error
        setTimeout(() => {
          navigate(route);
        }, 100);
      }
    }
  }, [autoRedirect, onError, navigate]);

  useEffect(() => {
    // Registrar el callback en el interceptor
    setApiErrorCallback(handleApiError);

    // Cleanup
    return () => {
      setApiErrorCallback(() => {});
    };
  }, [handleApiError]);
};
