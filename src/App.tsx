// Componente principal de la aplicación
// Ubicación: src/App.tsx

import { Outlet } from 'react-router-dom';
import { OfflineDetector } from '@/core/components/OfflineDetector';
import { useApiErrorHandler } from '@/shared/hooks';

export default function App() {
  // Detectar errores de API automáticamente
  useApiErrorHandler({
    autoRedirect: true,
    onError: (error) => {
      // Log solo en desarrollo
      if (import.meta.env.DEV) {
        console.error('API Error:', error);
      }
    }
  });

  return (
    <>
      <OfflineDetector />
      <Outlet />
    </>
  );
}
