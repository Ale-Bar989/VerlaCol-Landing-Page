// Hook para detectar el estado de conexión a internet
// Ubicación: src/shared/hooks/useOnlineStatus.ts
// Optimizaciones: useCallback, useEffect con cleanup

import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/core/router/routes.config';

interface UseOnlineStatusOptions {
  redirectOnOffline?: boolean;
  redirectDelay?: number;
}

/**
 * Hook para detectar el estado de conexión a internet
 * Opcionalmente puede redirigir a la página de error 400 cuando no hay conexión
 * 
 * @param options - Configuración del hook
 * @returns Estado de conexión online/offline
 * 
 * @example
 * const isOnline = useOnlineStatus({ redirectOnOffline: true });
 */
export const useOnlineStatus = (options: UseOnlineStatusOptions = {}) => {
  const { redirectOnOffline = false, redirectDelay = 2000 } = options;
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  const handleOnline = useCallback(() => {
    setIsOnline(true);
  }, []);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
    
    // Redirigir a página de error si está habilitado
    if (redirectOnOffline) {
      setTimeout(() => {
        navigate(ROUTES.NO_CONNECTION);
      }, redirectDelay);
    }
  }, [redirectOnOffline, redirectDelay, navigate]);

  useEffect(() => {
    // Listeners para eventos de conexión
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnline, handleOffline]);

  return isOnline;
};
