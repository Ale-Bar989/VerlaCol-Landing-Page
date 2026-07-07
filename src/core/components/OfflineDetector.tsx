// Componente para detectar y manejar estado offline
// Ubicación: src/core/components/OfflineDetector.tsx

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/core/router/routes.config';

export const OfflineDetector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOnline = () => {
      // Si estamos en la página de no-connection, volver al home
      if (location.pathname === ROUTES.NO_CONNECTION) {
        navigate(ROUTES.HOME);
      }
    };

    const handleOffline = () => {
      // Solo redirigir si no estamos ya en la página de error
      if (location.pathname !== ROUTES.NO_CONNECTION) {
        navigate(ROUTES.NO_CONNECTION);
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Verificar estado inicial
    if (!navigator.onLine && location.pathname !== ROUTES.NO_CONNECTION) {
      navigate(ROUTES.NO_CONNECTION);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [navigate, location.pathname]);

  return null; // Este componente no renderiza nada
};
