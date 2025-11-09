// Página de error 503 - Servicio no disponible
// Ubicación: src/features/service-unavailable/index.tsx

import { NotFound } from '@/shared/components';
import { useCallback } from 'react';

export const ServiceUnavailablePage = () => {
  // Handler para reintentar
  const handleRetry = useCallback(() => {
    // Recargar la página para reintentar la conexión
    window.location.reload();
  }, []);

  return (
    <NotFound 
      errorCode={503}
      title="Servicio temporalmente no disponible"
      description="Nuestros servicios están temporalmente fuera de línea. Por favor, intenta nuevamente en unos minutos."
      showBackButton={true}
      showRetryButton={true}
      onRetry={handleRetry}
    />
  );
};

export default ServiceUnavailablePage;
